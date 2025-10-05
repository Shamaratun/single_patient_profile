"use client";

import { PropsSurgical, SurgicalData, AdmissionData } from "../[id]/type";


const Info = ({ label, value }: { label: string; value: any }) => (
  <div className="flex flex-col">
    <span className="text-gray-500 font-medium">{label}</span>
    <span className="text-gray-800">{value}</span>
  </div>
);

export default function SurgicalInfoComponent({ admissions }: PropsSurgical) {
 
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


  const surgicalData: SurgicalData[] | null = admissions?.at(-1)?.post_ops_data ?? null;

  if (!surgicalData || surgicalData.length === 0) {
    return (
      <div className="p-6 text-center text-gray-500">
        No surgical information available
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
        Surgical Information
      </h2>

      {surgicalData.map((surgery, index) => (
        <div
          key={surgery.id ?? index}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 border-b pb-4 last:border-b-0 last:pb-0"
        >
          <Info label="ID" value={renderValue(surgery.id)} />
          <Info label="Admission ID" value={renderValue(surgery.admission_id)} />
          <Info label="Patient ID" value={renderValue(surgery.patient_id)} />
          <Info label="Doctor ID" value={renderValue(surgery.doctor_id)} />
          <Info label="Hospital ID" value={renderValue(surgery.hospital_id)} />
          <Info label="Document Type" value={renderValue(surgery.document_type)} />
          <Info label="File Name" value={renderValue(surgery.file_name)} />
          <Info label="File Type" value={renderValue(surgery.file_type)} />
          <Info label="Drive File ID" value={renderValue(surgery.drive_file_id)} />
          <Info label="Remarks" value={renderValue(surgery.remarks)} />
          <Info label="Insert By" value={renderValue(surgery.insert_by)} />
          <Info label="Insert Date" value={renderValue(surgery.insert_date)} />
          <Info label="Update By" value={renderValue(surgery.update_by)} />
          <Info label="Update Date" value={renderValue(surgery.update_date)} />
          <Info label="Active" value={renderValue(surgery.is_active)} />
          <Info label="DT" value={renderValue(surgery.dt)} />
        </div>
      ))}
    </div>
  );
}