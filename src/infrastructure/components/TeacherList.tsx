import * as React from "react";
import { Teacher } from "../../domain/models/Teacher";
import { TeacherService } from "../../domain/services/Teacher.service";
import { Link } from "react-router-dom";

export function TeacherList() {
  const [teachers, setTeachers] = React.useState<Teacher[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    TeacherService.getAllTeachersAsync().then((teachers) => {
      setTeachers(teachers);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <>
        <div>
          <div>
            <a className="btn btn-sm btn-outline-secondary">Volver</a>
          </div>
        </div>
        <div className="spinner-border text-secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>
          <div>
            <Link
              className="btn btn-sm btn-outline-secondary float-start mt-2 ms-3"
              to="/"
            >
              Volver
            </Link>
          </div>
        </div>
        <div>
          <h1>Teachers List</h1>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Identification</th>
                <th scope="col">FullName</th>
                <th scope="col">Age</th>
                <th scope="col">Address</th>
                <th scope="col">Phone</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((teacher) => (
                <tr key={teacher.teacherID}>
                  <th scope="row">{teacher.identification}</th>
                  <td>
                    {teacher.name} {teacher.lastName}
                  </td>
                  <td>{teacher.age}</td>
                  <td>{teacher.address}</td>
                  <td>{teacher.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
