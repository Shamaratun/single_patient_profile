import ReleaseComponent from "../components/release_component";
import FetchedProfile from "./fetchedProfile";

type Params = { id: string, admission_id: string };

export default function Page({ params }: { params: Params }) {
  const { id } = params;
  const { admission_id } = params;

  return (

    <div>
      <FetchedProfile patientId={Number(id)} admission_id={Number(admission_id)} />


    </div>
  );
}
