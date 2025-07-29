// the function for show the details calculation ... 
function toggleDetails(index) {
    const details = document.getElementsByClassName('details')[index];
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block'; // Show details
    } else {
        details.style.display = 'none'; // Hide details
    }
}
const showhow = document.getElementsByClassName('formula');
for (let i = 0; i < showhow.length; i++) {
    showhow[i].onclick = () => toggleDetails(i);
}


// Input field creation    
function addItem(which) {
    // Select the input fields using querySelector
    const gradeInput = document.querySelector(`#${which} .inputField input[placeholder="Grade"]`);
    const creditInput = document.querySelector(`#${which} .inputField input[placeholder="Credit"]`);

    console.log(gradeInput.value, creditInput.value, "selected successfully... ");
    // Get the values from the input fields
    const grade = gradeInput.value == '' ? 0 : gradeInput.value;
    const credit = creditInput.value == '' ? 0 : creditInput.value;

    // Log the values to the console
    console.log('Grade:', grade);
    console.log('Credit:', credit);

    const taskList = document.querySelector(`#${which} .taskList`);
    const newItem = document.createElement('div');
    newItem.className = 'task';
    newItem.innerHTML = `
                <span class="grade">${grade}</span>
                <span class="credit">${credit}</span>
                <button class="delete-button" onclick="delete_item(${which})">Delete</button>
            `;
    taskList.append(newItem);
    // Clear the input fields
    gradeInput.value = '';
    creditInput.value = '';

    // Add event listener to the delete button
    newItem.querySelector('.delete-button').addEventListener('click', () => {
        newItem.remove(); // Remove the task element
    });
    // Add event listener to the "Done" button
    // document.querySelector(`#${which} .inputField button`).addEventListener('click', getInputValues);
}


function calculate(gradelist, creditlist) {
    var sumGxV = 0;
    var sumV = 0;
    for (let i = 0; i < gradelist.length; i++) {
        let GxV = gradelist[i] * creditlist[i];
        sumGxV += GxV;
        sumV += creditlist[i];
    }
    return sumGxV / sumV;
}

function parsing(which) {
    console.log("parsing....");
    const GPAs = document.querySelectorAll(`#${which} .taskList .task`);
    const grades = [];
    const credits = [];
    // Loop through each task to extract grades and credits
    GPAs.forEach(item => {
        const grade = parseFloat(item.querySelector('.grade').innerText);
        grades.push(grade);
        const credit = parseFloat(item.querySelector('.credit').innerText);
        credits.push(credit);
    });
    console.log("Grades:", grades, "Credits:", credits);
    return Array(grades, credits);
}


// Call the function to get values
document.querySelector('#cgpa button[type="submit"]').addEventListener('click', function (event) {
    console.log("clicked....")
    data = parsing('cgpa')
    ans = calculate(data[0], data[1]);
    document.getElementById('ans_cgpa').innerHTML = `<center> CGPA=${ans} </center>`;
});

document.querySelector('#sgpa button[type="submit"]').addEventListener('click', function (event) {
    console.log("clicked....")
    data = parsing('sgpa')
    ans = calculate(data[0], data[1]);
    document.getElementById('ans_sgpa').innerHTML = `<center> SGPA=${ans} </center>`;
});