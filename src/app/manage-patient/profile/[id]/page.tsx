import { FetchById } from "./fetchById"; // adjust path if needed

type Params = { id: string };

export default async function PatientPage({ params }: { params: Params }) {
  // Await params for Next.js 15 dynamic routing
  const { id } = await params;
  const patient_id = Number(id);

  // Fetch patient data from API
  const patient = await FetchById(patient_id);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Patient Profile</h1>

      {patient ? (
        <div>
          <p><strong>ID:</strong> {id}</p>
          <p><strong>Name:</strong> {patient.name}</p>
          <p><strong>Age:</strong> {patient.age}</p>
          <p><strong>Gender:</strong> {patient.gender}</p>

          {/* Render all other fields, including nested objects */}
          {Object.entries(patient).map(([key, value]) => {
            if (["name", "age", "gender"].includes(key)) return null;

            if (typeof value === "object" && value !== null) {
              return (
                <div key={key} style={{ marginLeft: "16px" }}>
                  <strong>{key}:</strong>
                  {Object.entries(value).map(([k, v]) => (
                    <p key={k}>
                      {k}: {typeof v === "object" ? JSON.stringify(v) : v}
                    </p>
                  ))}
                </div>
              );
            }

            return (
              <p key={key}>
                {/* <strong>{key}:</strong> {value} */}
              </p>
            );
          })}
        </div>
      ) : (
        <p>No patient found with ID {id}</p>
      )}
    </div>
  );
}