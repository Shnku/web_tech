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

    console.log(gradeInput, creditInput, "selected successfully... ");
    // Get the values from the input fields
    const grade = gradeInput.value == null ? 0 : gradeInput.value;
    const credit = creditInput.value == null ? 0 : creditInput.value;

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


// const CGPAs = document.querySelectorAll("#sgpa .taskList .task");
// const SGPAs = document.querySelectorAll("#cgpa .taskList .task");;
// Function to get values from task lists
function getValuesFromTasks() {
    const CGPAs = document.querySelectorAll("#cgpa .taskList .task");
    const SGPAs = document.querySelectorAll("#sgpa .taskList .task");

    console.log("shgahgsd", CGPAs)
    // Array to hold the values
    const cgpaValues = [];
    const sgpaValues = [];

    // Extract values from CGPA tasks
    CGPAs.forEach(task => {
        const spans = task.querySelectorAll('span');
        const grade = spans[0].innerText; // Assuming the first span is for grade
        const credit = spans[1].innerText; // Assuming the second span is for credit
        cgpaValues.push({ grade: parseFloat(grade), credit: parseFloat(credit) });
    });

    // Extract values from SGPA tasks
    SGPAs.forEach(task => {
        const spans = task.querySelectorAll('span');
        const grade = spans[0].innerText; // Assuming the first span is for grade
        const credit = spans[1].innerText; // Assuming the second span is for credit
        sgpaValues.push({ grade: parseFloat(grade), credit: parseFloat(credit) });
    });

    console.log('CGPA Values:', cgpaValues);
    console.log('SGPA Values:', sgpaValues);
}

// Call the function to get values


document.querySelector(`#sgpa button[type="submit"]`).addEventListener('click', function (event) {
    console.log("clicked....")
    getValuesFromTasks();
    calculate(); // Call the calculation function
});
document.querySelector('#cgpa button[type="submit"]').addEventListener('click', function (event) {
    console.log("clicked....")
    getValuesFromTasks();
    calculate(); // Call the calculation function
});