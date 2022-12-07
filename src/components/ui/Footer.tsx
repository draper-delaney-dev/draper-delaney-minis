import { VscGithubInverted } from 'react-icons/vsc';
import { AiFillCopyrightCircle } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="flex bg-blue-500 py-2 mt-auto w-screen">
      <p className="sm:flex grow justify-center hidden"><AiFillCopyrightCircle className="mx-1" /> Dwayne Draper
        <a href="https://github.com/draper-delaney-dev" target="_blank" rel="noopener noreferrer">
          <VscGithubInverted className="mx-1" />
        </a> & Brian Delaney <a href="https://github.com/BrianDelaney7" target="_blank" rel="noopener noreferrer">
          <VscGithubInverted className="mx-1" />
        </a> 2022
      </p>
      <p className="flex grow justify-center sm:hidden"><AiFillCopyrightCircle className="mx-1" /> D. D.
        <a href="https://github.com/dwaynedraper" target="_blank" rel="noopener noreferrer">
          {/* <VscGithubInverted className="mx-1" /> */}
        </a> & B. D. <a href="https://github.com/BrianDelaney7" target="_blank" rel="noopener noreferrer">
          {/* <VscGithubInverted className="mx-1" /> */}
        </a> 2022
      </p>
    </footer>
  );
};

export default Footer;