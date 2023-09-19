import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { TeacherList } from "./infrastructure/components/TeacherList";
import { StudentList } from "./infrastructure/components/StudentList";
import { FormStudentCreate } from "./infrastructure/components/FormStudentCreate";
import { FormStudentUpdate } from "./infrastructure/components/FormStutentUpdate";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/teachers" element={<TeacherList />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/students/create" element={<FormStudentCreate />} />
          <Route
            path="/students/update/:studentID"
            element={<FormStudentUpdate />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
