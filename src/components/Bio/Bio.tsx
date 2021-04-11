import BioImg from "./BioImg";
import BioText from "./BioText";

function Bio() {
  return (
    <div className="flex flex-col items-center shadow-sm">
      <BioImg />
      <BioText />
    </div>
  );
}

export default Bio;
