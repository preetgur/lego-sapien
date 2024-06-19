import BackBtn from "@/app/components/BackBtn";
import CandidateForm from "@/app/components/CandidateForm";

function AddCandidate() {
  return (
    <div className=" relative flex w-full items-center justify-center ">
      <div className=" absolute top-0 left-0 lg:hidden">
        <BackBtn />
      </div>
      <CandidateForm />
    </div>
  );
}

export default AddCandidate;
