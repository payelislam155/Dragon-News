import { CiTwitter } from "react-icons/ci";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const FindUs = () => {
    return (
      <div>
        <h1 className="font-semibold mb-3">Find Us On</h1>
        <div className="join join-vertical flex gap-2 *: bg-base-100">
          <button className="btn join-item justify-start">
            <FaFacebook />Facebook
          </button>
          <button className="btn join-item justify-start">
             <FaTwitter />Twitter
          </button>
          <button className="btn join-item justify-start">
             <CiTwitter />Twitter
          </button>
        </div>
      </div>
    );
};

export default FindUs;