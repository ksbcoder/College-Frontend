import * as React from "react";
import { CreateStudentCmd } from "../http/commands/CreateStudentCmd";
import { StudentService } from "../../domain/services/Student.service";
import { Link } from "react-router-dom";

export function FormStudentCreate() {
  const [identification, setIdentification] = React.useState("");
  const [name, setName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [age, setAge] = React.useState(0);
  const [address, setAddress] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cmd: CreateStudentCmd = {
      identification,
      name,
      lastName,
      age,
      address,
      phone,
    };
    StudentService.createStudentAsync(cmd)
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
      <h1>Create Student</h1>
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
        <button type="submit" className="btn btn-primary">
          Crear
        </button>
      </form>
    </div>
  );
}
