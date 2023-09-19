import * as React from "react";
import { ReportDTO } from "../http/dto/ReportDTO";
import { ReportService } from "../../domain/services/Report.service";

export function Navbar() {
  const [Report, setReport] = React.useState<ReportDTO[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const getReport = () => {
    setIsLoading(true);
    ReportService.getReportAsync()
      .then((Report) => {
        setReport(Report);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          College
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/teachers">
                Teachers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/students">
                Students
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primaty" onClick={getReport}>
                Report
              </a>
            </li>
          </ul>
        </div>
        {isLoading && (
          <p className="bg-primary text-light p-2 rounded-2 mt-2">
            Loading report...
          </p>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
