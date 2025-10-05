"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PatientDetailsInput() {
  const [id, setId] = useState("");
  const [admissionId, setAdmissionId] = useState("");
  const router = useRouter();

  const handleGo = () => {
    if (!id) {
      alert("Please enter an ID");
      return;
    }
    if (!admissionId) {
      alert("Please enter an admission ID");
      return;
    }
    router.push(`/manage-patient/profile/${id}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Enter Patient ID</h2>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Patient ID"
        style={{ marginRight: "10px", padding: "5px" }}
      /> 
      <h2>Enter Patient Admission ID</h2>
      <input
        type="text"
        value={admissionId}
        onChange={(e) => setAdmissionId(e.target.value)}
        placeholder="Patient admission ID"
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <button onClick={handleGo} style={{ padding: "5px 10px" }}>
        View Patient
      </button>
    </div>
  );
}