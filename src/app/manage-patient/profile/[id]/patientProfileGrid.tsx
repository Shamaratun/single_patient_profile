"use client";

import { AdmissionData, PatientProfileData } from "./type";

export default function PatientProfileGrid({ patient_basic, admissions }: PatientProfileData) {
  // Pick the latest admission safely (nullable)
  const latestAdmission: AdmissionData | null =
    Array.isArray(admissions) && admissions.length > 0
      ? admissions[admissions.length - 1].admission_data
      : null;

  const renderValue = (v: any) => {
    if (v === null || v === undefined || v === "") return "N/A";
    if (typeof v === "object") return JSON.stringify(v);
    return String(v);
  };

  if (!latestAdmission) {
    return <div className="p-6 text-center text-gray-500">No admission information available</div>;
  }

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-sm min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Patient Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Patient Basic Info */}
        <Info label="Patient ID" value={patient_basic?.id} />
        <Info label="Name" value={patient_basic?.name} />
        <Info label="Age" value={patient_basic?.age} />
        <Info label="Gender" value={patient_basic?.gender} />
        <Info label="Mobile" value={patient_basic?.mobile_number} />
        <Info label="Address" value={patient_basic?.address_line_one} className="col-span-2" />

        {/* Latest Admission Info */}
        <Info label="Admission ID" value={latestAdmission?.id} />
        <Info label="Hospital Name" value={latestAdmission?.hospital_name} className="col-span-2" />
        <Info label="Date of Admission" value={latestAdmission?.date_of_adm} />
        <Info label="Remarks" value={latestAdmission?.remarks} className="col-span-2" />
        <Info label="Referral Source" value={latestAdmission?.referral_source_name} />
        <Info label="Admission Status" value={latestAdmission?.adm_status} />
      </div>
    </div>
  );
}

// Helper component for consistent layout
function Info({ label, value, className }: { label: string; value?: any; className?: string }) {
  return (
    <div className={`bg-white p-3 rounded shadow-sm flex flex-col ${className || ""}`}>
      <span className="text-sm text-gray-600">{label}</span>
      <span className="text-lg font-medium text-gray-800">{value ?? "N/A"}</span>
    </div>
  );
}
