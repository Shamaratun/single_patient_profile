// // types/patient.ts

// Basic patient info
export interface PatientBasic {
  id: number;
  name: string;
  age: number;
  gender: string;
  mobile_number: string;
  address_line_one: string;
  marital_status?: string;
  occupation?: string;
  religion?: string;
  remarks?: string;
  insert_by?: string;
  insert_date?: string;
  update_by?: string | null;
  update_date?: string | null;
  is_active?: number;
}

// Admission data
export interface AdmissionData {
  id: number; // admission_id
  hospital_id: number;
  hospital_name: string;
  date_of_adm: string;
  adm_status?: string;
  referral_source_name?: string;
  remarks?: string | null;
  insert_by?: string;
  insert_date?: string;
  update_by?: string | null;
  update_date?: string | null;
  is_active?: number;
  [key: string]: any;
}

// Release data
export interface ReleaseData {
  id: number;
  admission_id: number;
  patient_id: number;
  outcome?: string;
  advice_on_discharge?: string;
  discharge_date_time?: string;
  hospital_id?: number;
  created_at?: string;
  updated_at?: string;
  [key: string]: any;
}

// Surgical / post-op data
export interface SurgicalData {
  id: number;
  admission_id: number;
  patient_id: number;
  doctor_id?: number | null;
  hospital_id: number;
  document_type?: string | null;
  file_name: string;
  file_type: string;
  drive_file_id?: string | null;
  remarks?: string | null;
  insert_by?: string | null;
  insert_date?: string;
  update_by?: string | null;
  update_date?: string | null;
  is_active?: number;
  dt?: string;
  [key: string]: any;
}

// Medical / pre-op data
export interface MedicalData {
  id: number;
  admission_id: number;
  patient_id: number;
  doctor_id?: number | null;
  hospital_id: number;
  document_type?: string | null;
  file_name: string;
  file_type: string;
  drive_file_id?: string | null;
  remarks?: string | null;
  insert_by?: string | null;
  insert_date?: string;
  update_by?: string | null;
  update_date?: string | null;
  is_active?: number;
  dt?: string;
  [key: string]: any;
}

  
export type Admission = {
  admission_data?: any;
  pre_ops_data?: MedicalData[] | null;
 post_ops_data?: SurgicalData[] | null;
  release_data?: ReleaseData[];
}

export interface AdmissionItem {
  admission_data: AdmissionData;
  post_ops_data?: SurgicalData[];
  pre_ops_data?: MedicalData[];
  release_data?: ReleaseData;
}

export interface PropsRelease {
  admissions: AdmissionItem[];
}

export interface PropsSurgical {
  admissions: AdmissionItem[];
}

export interface PropsMedical {
  admissions: AdmissionItem[];
}


export interface PatientProfileData {
  patient_basic: PatientBasic;
  admissions: AdmissionItem[];
}
export interface CombinedPatient extends PatientBasic {
  admission_id: number;
  hospital_name: string;
  hospital_id: number;
  adm_status?: string;
  date_of_adm?: string;
  referral_source_name?: string;
  admission_remarks?: string;
}