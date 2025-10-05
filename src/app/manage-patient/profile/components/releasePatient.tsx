import { FetchById } from "../[id]/fetchById";
import { AdmissionItem, Props } from "../[id]/type";
import ReleaseInfoComponent from "./releaseInfoComponent";

export default async function ReleasePatient({ params }: Props) {
  const { id, admission_id } = params;

  const patientData = await FetchById(Number(id), Number(admission_id));

  if (!patientData || !patientData.admissions || patientData.admissions.length === 0) {
    return (
      <div className="text-center text-red-500 p-6">
        No patient or admission found
      </div>
    );
  }


  const admissionsWithId = patientData.admissions.map((adm: AdmissionItem) => ({
    ...adm,
    admission_id: adm.admission_data?.id,
  }));

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center text-gray-800">
        Release Information for Patient ID {id}, Admission ID {admission_id}
      </h1>

      <ReleaseInfoComponent admissions={patientData.admissions} />
    </div>
  );
}
