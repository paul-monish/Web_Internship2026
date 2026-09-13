import { useEffect, useState } from "react";

export default function App() {
  let c = 0;
  const [count, setCount] = useState(c);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    loadStudents();
  }, []);

  function loadStudents() {
    fetch("http://localhost:5050/api/v1/students")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data?.data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleClick() {
    setCount((prev) => prev + 1);
    console.log(count);
  }

  return (
    <div className="border-2 border-red-200">
      <h1>{count}</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleClick}
      >
        Click
      </button>
      <div>
        {students.map((student) => {
          return (
            <div key={student.id}>
              <h1>{student.name}</h1>
              <p>{student.email}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
