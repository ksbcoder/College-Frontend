import * as React from "react";
import { UpdateStudentCmd } from "../http/commands/UpdateStudentCmd";
import { StudentService } from "../../domain/services/Student.service";
import { StateStudent } from "../../common/enums";
import { Link } from "react-router-dom";

export function FormStudentUpdate() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [identification, setIdentification] = React.useState("");
  const [name, setName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [age, setAge] = React.useState(0);
  const [address, setAddress] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [stateStudent, setStateStudent] = React.useState(0);

  const studentID = window.location.pathname.split("/")[3];

  React.useEffect(() => {
    StudentService.getStudentByIdAsync(studentID).then((student) => {
      setIdentification(student.identification);
      setName(student.name);
      setLastName(student.lastName);
      setAge(student.age);
      setAddress(student.address);
      setPhone(student.phone);
      setStateStudent(student.stateStudent);
    });
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cmd: UpdateStudentCmd = {
      identification,
      name,
      lastName,
      age,
      address,
      phone,
      stateStudent,
    };
    StudentService.updateStudentAsync(studentID, cmd)
      .then((student) => {
        window.location.href = "/students";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <Link
        className="btn btn-sm btn-outline-secondary float-start mt-2 ms-3"
        to="/students"
      >
        Volver
      </Link>
      <h1>Update Student</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="identification" className="form-label">
            Identification
          </label>
          <input
            type="text"
            className="form-control"
            id="identification"
            placeholder="Identification"
            value={identification}
            onChange={(e) => setIdentification(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            LastName
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder="LastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            min={5}
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.valueAsNumber)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="stateStudent" className="form-label">
            State Student
          </label>
          <select
            className="form-select"
            id="stateStudent"
            value={stateStudent}
            onChange={(e) => setStateStudent(parseInt(e.target.value, 10))}
          >
            <option value={StateStudent.Active}>Active</option>
            <option value={StateStudent.Inactive}>Inactive</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
}
