interface Student{
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const studentOne: Student = {
    firstName: "Chioma",
    lastName: "Obi",
    age: 20,
    location: "Lagos"
}
const studentTwo: Student = {
    firstName: "Alfred",
    lastName: "Johnson",
    age: 18,
    location: "Abuja"
}

const studentsList: Student[] = [studentOne, studentTwo]


const table = document.createElement("table");
const tbody = document.createElement("tbody");


studentsList.forEach((individual) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = individual.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = individual.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);