"use client";

import { PropsRelease, AdmissionData } from "../[id]/type";

const Info = ({ label, value }: { label: string; value: any }) => (
  <div className="flex flex-col">
    <span className="text-gray-500 font-medium">{label}</span>
    <span className="text-gray-800">{value}</span>
  </div>
);

export default function ReleaseInfoComponent({ admissions }: PropsRelease) {

  if (!Array.isArray(admissions) || admissions.length === 0) {
    return (
      <div className="p-6 text-center text-gray-500">
        No admission information available
      </div>
    );
  }


  const latestAdmission: AdmissionData | null = admissions?.at(-1)?.admission_data ?? null;

  if (!latestAdmission) {
    return (
      <div className="p-6 text-center text-gray-500">
        No admission details available
      </div>
    );
  }

 
  const releaseData = latestAdmission.release_data ?? null;

  if (!releaseData) {
    return (
      <div className="p-6 text-center text-gray-500">
        No release information available
      </div>
    );
  }


  const renderValue = (v: any) => {
    if (v === null || v === undefined || v === "") return "N/A";
    if (typeof v === "object") return JSON.stringify(v);
    return String(v);
  };

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Release Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Info label="Patient ID" value={renderValue(releaseData.patient_id)} />
        <Info label="Admission ID" value={renderValue(releaseData.admission_id)} />
        <Info label="Discharge Date" value={renderValue(releaseData.discharge_date)} />
        <Info label="Discharge Type" value={renderValue(releaseData.discharge_type)} />
        <Info label="Remarks" value={renderValue(releaseData.remarks)} />
        <Info label="Doctor ID" value={renderValue(releaseData.doctor_id)} />
        <Info label="Insert By" value={renderValue(releaseData.insert_by)} />
        <Info label="Insert Date" value={renderValue(releaseData.insert_date)} />
        <Info label="Update By" value={renderValue(releaseData.update_by)} />
        <Info label="Update Date" value={renderValue(releaseData.update_date)} />
        <Info label="Active" value={renderValue(releaseData.is_active)} />
        <Info label="DT" value={renderValue(releaseData.dt)} />
      </div>
    </div>
  );
}
