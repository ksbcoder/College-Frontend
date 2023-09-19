import * as React from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { Student } from "../../domain/models/Student";
import { StudentService } from "../../domain/services/Student.service";
import { DeleteConfirmationModal } from "./DeleteModalConfirmation";

export function StudentList() {
  const [students, setStudents] = React.useState<Student[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false);
  const [studentToDelete, setStudentToDelete] = React.useState(null);

  React.useEffect(() => {
    StudentService.getAllStudentsAsync().then((students) => {
      setStudents(students);
      setIsLoading(false);
    });
  }, []);

  const openDeleteModal = (student: any) => {
    setStudentToDelete(student);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setStudentToDelete(null);
  };

  const confirmDelete = () => {
    StudentService.deleteStudentAsync(studentToDelete.studentID).then(() => {
      const newStudents = students.filter(
        (student) => student.studentID !== studentToDelete.studentID
      );
      setStudents(newStudents);
    });
    closeDeleteModal();
  };

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
            <Link
              className="btn btn-info float-end mt-2 ms-3"
              to="/students/create"
            >
              Crear +
            </Link>
          </div>
        </div>
        <div>
          <h1>Students List</h1>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Identification</th>
                <th scope="col">FullName</th>
                <th scope="col">Age</th>
                <th scope="col">Phone</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.studentID}>
                  <th scope="row">{student.identification}</th>
                  <td>
                    {student.name} {student.lastName}
                  </td>
                  <td>{student.age}</td>
                  <td>{student.phone}</td>
                  <td>
                    <Link
                      className="btn btn-sm btn-outline-primary me-2"
                      to={`/students/update/${student.studentID}`}
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => openDeleteModal(student)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <DeleteConfirmationModal
          isOpen={isDeleteModalOpen}
          onClose={closeDeleteModal}
          onConfirm={confirmDelete}
        />
      </>
    );
  }
}
