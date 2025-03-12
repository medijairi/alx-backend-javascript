interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Med',
  lastName: 'Awesome',
  age: 32,
  location: 'Marrakesh',
};

const student2: Student = {
  firstName: 'Karim',
  lastName: 'Maher',
  age: 27,
  location: 'Ben Guerir',
};

const students: Student[] = [student1, student2];

// Create the table element
const table = document.createElement('table');

// Create the table header (thead)
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');

// Add column titles
['First Name', 'Location'].forEach((headerText) => {
  const th = document.createElement('th'); // Create a <th> element
  th.textContent = headerText; // Set the text content of the header
  headerRow.appendChild(th); // Append the <th> to the header row
});

thead.appendChild(headerRow); // Append the header row to the <thead>
table.appendChild(thead); // Append the <thead> to the table

// Create the table body (tbody)
const tbody = document.createElement('tbody');

// Populate the table body with student data
students.forEach((student) => {
  const row = document.createElement('tr'); // Create a new row

  // Add the "First Name" cell
  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;
  row.appendChild(firstNameCell);

  // Add the "Location" cell
  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;
  row.appendChild(locationCell);

  tbody.appendChild(row); // Append the row to the <tbody>
});

table.appendChild(tbody); // Append the <tbody> to the table
document.body.appendChild(table); // Append the table to the document body
