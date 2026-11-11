import SelfIntroduction from "./components/SelfIntroduction";
import UserCard from "./components/UserCard";
import Task3 from "./components/Task3";
import Task4 from "./components/Task4";

function App() {
  const users = [
    {
      id: 1,
      name: "Venkata Rao",
      city: "Hyderabad",
      age: 24,
      email: "venkat@example.com",
      phone: "9876543210",
    },
    {
      id: 2,
      name: "Sasi",
      city: "Chennai",
      age: 22,
      email: "sasi@example.com",
      phone: "9876543211",
    },
    {
      id: 3,
      name: "Tharun",
      city: "Bangalore",
      age: 25,
      email: "tharun@example.com",
      phone: "9876543212",
    },
    {
      id: 4,
      name: "Krishna",
      city: "Mumbai",
      age: 23,
      email: "krishna@example.com",
      phone: "9876543213",
    },
    {
      id: 5,
      name: "Manoj",
      city: "Salem",
      age: 26,
      email: "manoj@example.com",
      phone: "9876543214",
    },
  ];

  return (
    <div>
      {/* Task 1 */}
      <SelfIntroduction />

      {/* Task 2 */}
      <h1>React Props - User Details</h1>

      {users.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          city={user.city}
          age={user.age}
          email={user.email}
          phone={user.phone}
        />
      ))}

      {/* Task 3 */}
      <Task3 />

      {/* Task 4 */}
      <Task4 />
    </div>
  );
}

export default App;
