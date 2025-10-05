// import ReleasePatient from "./[id]/releasePatient/page";
// import ReleaseInfoComponent from "./components/releaseInfoComponent";

// import PatientDetailsInput from "./patientDetails";

// export default function ProfilePage() {
//   return (
// <>
//       <h1>Manage Patients</h1>
//       <PatientDetailsInput />
//      <ReleaseInfoComponent admissions={[]}/>
// </>
//   );
// }


import SurgicalPatient from "./components/surgicalPatient";
import ReleasePatient from "./components/releasePatient";


export default function Page() {

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-bold mb-4">Patient Profile</h1>

      <SurgicalPatient params={{
        id: "",
        admission_id: ""
      }} />
      <ReleasePatient params={{
  id: "73",
  admission_id: "48"
}} />
    </div>
  );
};
