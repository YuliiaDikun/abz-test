import { TailSpin } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="loader_wrapper">
      <TailSpin
        height="48"
        width="48"
        color="#00bdd3"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
