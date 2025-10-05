"use server";

export async function FetchById(patient_id: number, admission_id: number) {
  try {
    const res = await fetch(
      "https://sdms-api.onrender.com/api/v1/patientProfile/getProfile",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action_mode: "get_profile", patient_id, admission_id }),
        cache: "no-store",
      }
    );
    console.log(res.json)
    if (!res.status.toString().startsWith("2")) {
      throw new Error("Failed to fetch data");
    }

    return res.json();

  } catch (err) {
    console.error("FetchById failed:", err);
    return null;
  }
}