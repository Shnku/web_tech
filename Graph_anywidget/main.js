import { render } from "./edgedraw.js";

const fakeModel = {
    data: {
        names: ["Alice", "Bob", "Charlie", "Diana"],
        links: [],
        height: 500,
        width: 450,
    },

    get(k) { return this.data[k]; },
    set(k, v) { this.data[k] = v; },

    save_changes() { console.log("Model saved:", this.data); }
};

document.addEventListener("DOMContentLoaded", () => {
    const el = document.getElementById("app");
    render({ model: fakeModel, el });
});
