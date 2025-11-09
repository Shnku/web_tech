import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

/**
 * Render a directed graph editor using D3.- { model, el }
 */

export function render({ model, el }) {
    const container = document.createElement("div");
    container.classList.add("matrix-container");
    const input = document.createElement("input");
    input.placeholder = "Enter node name";
    const addButton = document.createElement("button");
    addButton.textContent = "Add Node";
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove Node";
    container.appendChild(input);
    container.appendChild(addButton);
    container.appendChild(removeButton);
    el.appendChild(container);

    let nodes = model.get("names").map(name => ({ id: name, x: 100, y: 100 }));
    let links = [];
    let selectedNode = null;

    const width = model.get("width");
    const height = model.get("height");
    const svg = d3.select(container)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .style("border", "1px solid #ccc");

    // Define arrow marker
    svg.append("defs").append("marker")
        .attr("id", "arrowhead")
        .attr("viewBox", "-0 -5 10 10")
        .attr("refX", 13)
        .attr("refY", 0)
        .attr("orient", "auto")
        .attr("markerWidth", 6)
        .attr("markerHeight", 6)
        .append("path")
        .attr("d", "M0,-5L10,0L0,5")
        .attr("class", "arrow");

    const simulation = d3.forceSimulation(nodes)
        .force("link", d3.forceLink(links).id(d => d.id).distance(100))
        .force("charge", d3.forceManyBody().strength(-50))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("collide", d3.forceCollide().radius(50))
        .on("tick", ticked);

    let linkGroup = svg.append("g");
    let nodeGroup = svg.append("g");

    let node = nodeGroup.selectAll(".node")
        .data(nodes)
        .join("circle")
        .attr("class", "node")
        .attr("r", 10)
        .attr("fill", "#69b3a2")
        .on("click", handleNodeClick);

    let labels = nodeGroup.selectAll(".label")
        .data(nodes)
        .join("text")
        .attr("class", "label")
        .attr("dx", 15)
        .attr("dy", 4)
        .text(d => d.id);

    // --- Add Node Button ---
    addButton.addEventListener("click", () => {
        const name = input.value.trim();
        if (!name) return;
        if (nodes.some(n => n.id === name)) {
            alert("Node already exists!");
            return;
        }
        const newNode = { id: name, x: 100, y: 100 };
        nodes.push(newNode);
        simulation.nodes(nodes);
        updateNodes();
        updateLinks();
        input.value = "";
    });
    // --- Delete Node Button ---
    removeButton.addEventListener("click", () => {
        const name = input.value.trim();
        if (!name) return;
        if (nodes.some(n => n.id === name)) {
            nodes = nodes.filter(n => n.id !== name);
            updateNodes()
            links = links.filter(l => {
                const s = getEndpointId(l.source);
                const t = getEndpointId(l.target);
                return s !== name && t !== name;
            });
            simulation.force("link").links(links);
            updateNodes();
            updateLinks();
            model.set("links", links.map(l => ({ source: l.source.id, target: l.target.id })));
            model.save_changes();
        }
        simulation.nodes(nodes).on("tick", ticked);
        simulation.force("link").links(links);
        simulation.alpha(1).restart();
        input.value = "";
    });

    function getEndpointId(ep) {
        return (typeof ep === "object" && ep !== null) ? ep.id : ep;
    }

    function handleNodeClick(event, d) {
        if (!selectedNode) {
            selectedNode = d;
            node.classed("selected", n => n === selectedNode);
        } else if (selectedNode === d) {
            selectedNode = null;
            node.classed("selected", false);
        } else {
            const existingForwardLink = links.find(l =>
                (l.source === selectedNode && l.target === d) ||
                (l.source.id === selectedNode.id && l.target.id === d.id)
            );
            const existingReverseLink = links.find(l =>
                (l.source === d && l.target === selectedNode) ||
                (l.source.id === d.id && l.target.id === selectedNode.id)
            );

            if (existingReverseLink) {
                links = links.filter(l => l !== existingReverseLink);
            }
            if (!existingForwardLink) {
                links.push({ source: selectedNode, target: d });
            }

            simulation.force("link").links(links);
            selectedNode = null;
            node.classed("selected", false);
            updateLinks();
        }

        model.set("links", links.map(l => ({ source: l.source.id, target: l.target.id })));
        model.save_changes();
    }

    function updateNodes() {
        node = nodeGroup.selectAll(".node")
            .data(nodes)
            .join("circle")
            .attr("class", "node")
            .attr("r", 10)
            .attr("fill", "#69b3a2")
            .on("click", handleNodeClick);

        labels = nodeGroup.selectAll(".label")
            .data(nodes)
            .join("text")
            .attr("class", "label")
            .attr("dx", 15)
            .attr("dy", 4)
            .text(d => d.id);

        simulation.alpha(0.1).restart();
        node.call(drag);
        model.set("names", nodes.map(n => n.id));
        model.save_changes();
    }

    function updateLinks() {
        const link = linkGroup.selectAll(".link")
            .data(links)
            .join("path")
            .attr("class", "link")
            .attr("marker-end", "url(#arrowhead)")
            .attr("d", d => `M${d.source.x},${d.source.y}L${d.target.x},${d.target.y}`)
            .on("click", function (event, d) {
                event.stopPropagation();
                links = links.filter(l => l !== d);
                simulation.force("link").links(links);
                updateLinks();
                model.set("links", links.map(l => ({ source: l.source.id, target: l.target.id })));
                model.save_changes();
            });
    }

    function ticked() {
        node
            .attr("cx", d => d.x = Math.max(15, Math.min(width - 15, d.x)))
            .attr("cy", d => d.y = Math.max(15, Math.min(height - 15, d.y)));

        labels
            .attr("x", d => d.x)
            .attr("y", d => d.y);

        updateLinks();
    }

    const drag = d3.drag()
        .on("drag", function (event, d) {
            d.x = event.x;
            d.y = event.y;
            simulation.alpha(0.1).restart();
        });

    node.call(drag);
}
