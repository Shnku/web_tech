function addInputField() {
    const inputFields = document.getElementById('inputFields');
    const newField = document.createElement('div');
    newField.className = 'inputField';
    newField.innerHTML = `
        <input type="number" placeholder="Grade Points" required>
        <input type="number" placeholder="Credit Hours" required>
    `;
    inputFields.appendChild(newField);
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
