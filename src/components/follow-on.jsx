import {FaGithub, FaLinkedinIn} from "react-icons/fa6";

const FollowOn = () => {
  return (
    <div
      className="faded-text pt-2" //custom - faded-text
    >
      <span>Follow me on:</span>
      <div className="flex gap-4 pt-3">
        <a href="https://github.com/hariharapranav/">
          <FaGithub  size={20} />
        </a>
        <a href="https://www.linkedin.com/in/hariharapranav/">
          <FaLinkedinIn size={20} />
        </a>
      </div>
    </div>
  );
};

export default FollowOn;
