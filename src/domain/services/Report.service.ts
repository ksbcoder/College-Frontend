import { reportRepository } from "../../infrastructure/repositories/report.repository";

export const ReportService = {
    getReportAsync: async () => {
        return await reportRepository.getResportAsync();
    }
}