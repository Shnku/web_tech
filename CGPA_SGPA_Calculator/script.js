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
const createInputField = (which) => {
    const inputFields = document.getElementById('inputField');
    const newField = document.createElement('div');
    newField.className = 'inputField';
    newField.innerHTML = `
        <input type="number" placeholder="Grade Points" required>
        <input type="number" placeholder="Credit Hours" required>
        <button type="button" class="delete-button">Delete</button>
    `;

    // Add event listener to the delete button
    const deleteButton = newField.querySelector('.delete-button');
    deleteButton.addEventListener('click', () => {
        inputFields.removeChild(newField);
    });

    inputFields.appendChild(newField);
};

function addInputField(which) {
    console.log("Function called");
    createInputField(which);
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





