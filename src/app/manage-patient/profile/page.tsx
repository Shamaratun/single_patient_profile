import ReleasePatient from "./[id]/releasePatient/page";
import ReleaseComponent from "./components/release_component";
import PatientDetailsInput from "./patientDetails";

export default function ProfilePage() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>Manage Patients</h1>
      <PatientDetailsInput />
     {/* <ReleaseComponent admissions={patientData.admissions} /> */}
    </main>
  );
}