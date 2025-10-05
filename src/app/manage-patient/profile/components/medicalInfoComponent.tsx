"use client";

import { PropsMedical, MedicalData, AdmissionData } from "../[id]/type";


const Info = ({ label, value }: { label: string; value: any }) => (
  <div className="flex flex-col">
    <span className="text-gray-500 font-medium">{label}</span>
    <span className="text-gray-800">{value}</span>
  </div>
);



export default function MedicalInfoComponent({ admissions }: PropsMedical) {

  if (!Array.isArray(admissions) || admissions.length === 0) {
    return (
      <div className="p-6 text-center text-gray-500">
        No admission information available
      </div>
    );
  }

  const latestAdmission = admissions?.at(-1);

  if (!latestAdmission?.pre_ops_data || latestAdmission.pre_ops_data.length === 0) {
    return (
      <div className="p-6 text-center text-gray-500">
        No medical information available
      </div>
    );
  }

  const medicalData: MedicalData[] = latestAdmission.pre_ops_data;


  const renderValue = (v: any) => {
    if (v === null || v === undefined || v === "") return "N/A";
    if (typeof v === "object") return JSON.stringify(v);
    return String(v);
  };

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Medical Information
      </h2>

      {medicalData.map((med, index) => (
        <div
          key={med.id ?? index}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 border-b pb-4 last:border-b-0 last:pb-0"
        >
          <Info label="ID" value={renderValue(med.id)} />
          <Info label="Admission ID" value={renderValue(med.admission_id)} />
          <Info label="Patient ID" value={renderValue(med.patient_id)} />
          <Info label="Doctor ID" value={renderValue(med.doctor_id)} />
          <Info label="Hospital ID" value={renderValue(med.hospital_id)} />
          <Info label="Document Type" value={renderValue(med.document_type)} />
          <Info label="File Name" value={renderValue(med.file_name)} />
          <Info label="File Type" value={renderValue(med.file_type)} />
          <Info label="Drive File ID" value={renderValue(med.drive_file_id)} />
          <Info label="Remarks" value={renderValue(med.remarks)} />
          <Info label="Insert By" value={renderValue(med.insert_by)} />
          <Info label="Insert Date" value={renderValue(med.insert_date)} />
          <Info label="Update By" value={renderValue(med.update_by)} />
          <Info label="Update Date" value={renderValue(med.update_date)} />
          <Info label="Active" value={renderValue(med.is_active)} />
          <Info label="DT" value={renderValue(med.dt)} />
        </div>
      ))}
    </div>
  );
}