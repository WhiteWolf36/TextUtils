import Lottie from "lottie-react";
import animation from "./animation.json";
import programmer from "./programmer.json";
interface Props {
  color: string;
}

export default function CustomizedAccordions({ color }: Props) {
  return (
    <div className="container my-3">
      <h1 style={{ color: `${color}` }}>About Us</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Lottie animationData={animation} />
          </div>
          <div className="col-md-6">
            <Lottie animationData={programmer} />
          </div>
        </div>
      </div>
    </div>
  );
}
