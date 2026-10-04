import { useEffect, useState } from "react";
import { Button } from "../components/ui/Button";
import studentService from "../services/StudentService";

export const UserDetailPage = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    (() => {
      studentService.getAllStudents().then((res) => {
        setStudents(res);
      });
    })();
  }, []);

  const handleDelete = (id) => {
    try {
      studentService.deleteStudent(id).then((res) => {
        setStudents((prev) => prev.filter((student) => student.id !== id));
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
      <table className="w-full text-sm text-left rtl:text-right text-body">
        <thead className="bg-neutral-secondary-soft border-b border-default">
          <tr>
            <th scope="col" className="px-6 py-3 font-medium">
              Id
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Name
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Email
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Phone
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Course
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Age
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Address
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr
              className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default"
              key={student.id}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-heading whitespace-nowrap"
              >
                {student.id}
              </th>
              <td className="px-6 py-4">{student.name}</td>
              <td className="px-6 py-4">{student.email}</td>
              <td className="px-6 py-4">{student.phone}</td>
              <td className="px-6 py-4">{student.course}</td>
              <td className="px-6 py-4">{student.age}</td>
              <td className="px-6 py-4">{student.address}</td>
              <td className="px-6 py-4">
                <div className="flex gap-2">
                  <Button
                    label="EDIT"
                    bgColor="bg-indigo-500"
                    textColor="text-amber-50"
                  />
                  <Button
                    label="DELETE"
                    bgColor="bg-red-500"
                    textColor="text-amber-50"
                    onClick={() => handleDelete(student.id)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
