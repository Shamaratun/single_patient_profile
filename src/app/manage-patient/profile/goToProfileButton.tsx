"use client";
import { useRouter } from "next/navigation";

export default function GoToProfileButton({ id }: { id: string }) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(`/manage-patient/profile/${id}`)}
      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
      Go to Patient {id}
    </button>
  );
}
