"use client";

import { useEffect, useState } from "react";
import { FetchById } from "./fetchById";
import PatientProfileGrid from "./patientProfileGrid";

export default function FetchedProfile({ patientId,admissionId }: { patientId: number, admissionId: number }) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function load() {
      const patientData = await FetchById(patientId,admissionId);
      setData(patientData);
    }
    load();
  }, [patientId]);

  if (!data) return <div>Loading...</div>;

  return (
    <>
    <PatientProfileGrid
      patient_basic={data.patient_basic ?? data}
      admissions={data.admissions ?? []}
    />
    </>
  );
}