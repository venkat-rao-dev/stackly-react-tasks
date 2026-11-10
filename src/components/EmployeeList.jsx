import "./EmployeeList.css";

function EmployeeList() {
  const employees = [
    {
      id: 1,
      name: "Venkata rao",
      email: "venkat@example.com",
      age: 24,
      city: "Hyderabad",
      role: "FullStack Developer",
    },
    {
      id: 2,
      name: "Manoj Kumar",
      email: "manoj@example.com",
      age: 25,
      city: "Chennai",
      role: "React Developer",
    },
    {
      id: 3,
      name: "Sasi Srinivas",
      email: "sasi@example.com",
      age: 25,
      city: "Bangalore",
      role: "Automation Engineer",
    },
    {
      id: 4,
      name: "Paramesh",
      email: "paramesh@example.com",
      age: 25,
      city: "Mumbai",
      role: "UI/UX Designer",
    },
    {
      id: 5,
      name: "Krishna",
      email: "krishna@example.com",
      age: 26,
      city: "Salem",
      role: "L1 Supportt Engineer",
    },
  ];

  return (
    <div className="employee-section">
      <h2>Employee List</h2>

      <div className="employee-container">
        {employees.map((employee) => (
          <div className="employee-card" key={employee.id}>
            <h3>{employee.name}</h3>
            <p>Email: {employee.email}</p>
            <p>Age: {employee.age}</p>
            <p>City: {employee.city}</p>
            <p>Role: {employee.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmployeeList;
