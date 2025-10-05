import { FetchById } from "../fetchById";
import MedicalInfoComponent from "../../components/medicalInfoComponent";

export default async function MedicalPatient({ params }: { params: { id: string }, admission_id: string }) {
  const { id } = params;
const { admission_id } = params;
  const patientData = await FetchById(Number(id),Number(admission_id));

  if (!patientData) {
    return <div className="text-center text-red-500 p-6">No patient found</div>;
  }

  const admissions = patientData.admissions ?? [];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center text-gray-800">
        Medical Information for Patient ID {id}
      </h1>

      <MedicalInfoComponent admissions={admissions} />
    </div>
  );
}