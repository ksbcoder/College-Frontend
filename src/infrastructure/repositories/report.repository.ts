import { ReportDTO } from "../http/dto/ReportDTO";
import { http } from "../http/http";

export const reportRepository = {
    baseUrl: 'https://localhost:7297/api/',
    getResportAsync: async () => {
        const reports = await http.get<ReportDTO[]>(reportRepository.baseUrl + 'Report');
        return reports;
    }
};