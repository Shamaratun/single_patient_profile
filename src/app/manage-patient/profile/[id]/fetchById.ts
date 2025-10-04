"use server";

export async function FetchById(patient_id: number) {
  try {
    const res = await fetch(
      "https://sdms-api.onrender.com/api/v1/patientProfile/getProfile",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action_mode: "get_profile", patient_id }),
        cache: "no-store",
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status}`);
    }

    console.log("Fetched data:", data);

    return data?.data || data || null;
  } catch (err) {
    console.error("FetchById failed:", err);
    return null;
  }
}