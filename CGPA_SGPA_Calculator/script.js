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
    const grade = gradeInput.value;
    const credit = creditInput.value;

    // Log the values to the console
    console.log('Grade:', grade);
    console.log('Credit:', credit);

    // let dta = `<p> $grade , $credit </p>`
    const taskList = document.querySelector(`#${which} .taskList`);
    const newItem = document.createElement('div');
    newItem.className = 'task';
    newItem.innerHTML = `
                <span>${grade}, ${credit}</span>
                <button class="delete-button">Delete</button>
            `;
    taskList.append(newItem);
    // Clear the input fields
    gradeInput.value = '';
    creditInput.value = '';

    // Add event listener to the "Done" button
    // document.querySelector(`#${which} .inputField button`).addEventListener('click', getInputValues);
}


function delete_item(which) {
    // Add event listener to the delete button
    const deleteButton = document.querySelector('.delete-button');
    deleteButton.addEventListener('click', () => {
        inputField.removeChild(document);
    });
}


document.getElementById('sgpaForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const inputs = document.querySelectorAll('.inputField');
    let totalGradePoints = 0;
    let totalCreditHours = 0;

    inputs.forEach(input => {
        const gradePoints = parseFloat(input.children[0].value);
        const creditHours = parseFloat(input.children[1].value);
        totalGradePoints += gradePoints * creditHours;
        totalCreditHours += creditHours;
    });

    const sgpa = (totalGradePoints / totalCreditHours).toFixed(2);
    document.getElementById('result').innerText = `SGPA: ${sgpa}`;
});





