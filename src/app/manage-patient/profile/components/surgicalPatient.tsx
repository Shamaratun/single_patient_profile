import { FetchById } from "../[id]/fetchById";
import { Props } from "../[id]/type";
import SurgicalInfoComponent from "./surgicalInfoComponent";



export default async function SurgicalPatient({ params }: Props) {
  const { id, admission_id } = params;

  // Pass both patient ID and admission ID
  const patientData = await FetchById(Number(id), Number(admission_id));

  if (!patientData) {
    return (
      <div className="text-center text-red-500 p-6">
        No patient or admission found
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center text-gray-800">
        Surgical Information for Patient ID {id}, Admission ID {admission_id}
      </h1>

      <SurgicalInfoComponent admissions={patientData.admissions} />
    </div>
  );
}