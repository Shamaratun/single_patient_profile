import PatientDetails from "./manage-patient/profile/patientDetails";
import PatientProfile from "./manage-patient/profile/patientDetails";
import GoToProfileButton from "./manage-patient/profile/goToProfileButton";


export default function Home() {
  return (
    <div >
      <h1>Patient Profile</h1>
      <h1>Welcome</h1>
      <PatientDetails />
    </div>
  );
}