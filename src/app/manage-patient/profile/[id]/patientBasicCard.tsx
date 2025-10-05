// components/patient/PatientBasicCard.tsx
"use client";

import { useParams, useRouter } from "next/navigation";
import PatientDetails from "../patientDetails";
import { CombinedPatient } from "./type";


interface PatientBasicCardProps {

  patientid: CombinedPatient;
}

export default function PatientBasicCard({ patientid }: PatientBasicCardProps) {
  const router = useRouter();
  const params = useParams();
  const patientId = params.id;

  return (
    <div className="bg-white max-w-4xl w-full mx-auto shadow-lg rounded-2xl pt-6 p-4 sm:p-6">

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">{patientid.name}</h1>

      </div>


      <div >
        <PatientDetails />        
      </div>
    </div>
  );
}
