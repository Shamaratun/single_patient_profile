import { FetchById } from "../fetchById";
import ReleaseComponent from "../../components/release_component";

export default async function ReleasePatient({ params }: { params: { id: string } }) {
  const { id } = params;

  const patientData = await FetchById(Number(id));

  if (!patientData) {
    return <div className="text-center text-red-500 p-6">No patient found</div>;
  }

  const admissions = patientData.admissions ?? [];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center text-gray-800">
        Release Information for Patient ID {id}
      </h1>
     <ReleaseComponent admissions={patientData.admissions} />
    </div>
  );
}
