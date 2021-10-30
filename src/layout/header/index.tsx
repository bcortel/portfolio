const { Link } = require("react-scroll");

function Header() {
  return (
    <header
      className={
        "w-screen fixed top-0 text-white bg-gradient-to-b from-black font-medium uppercase z-10 "
      }
    >
      <div className={"container mx-auto flex justify-between px-5"}>
        <div>
          <Link
            className="py-7 inline-block cursor-pointer"
            activeClass="active"
            to="banner"
            spy={true}
            smooth={true}
            duration={1000}
          >
            Home
          </Link>
        </div>
        <nav>
          <ul className={"flex -mr-5"}>
            <li>
              <Link
                className="p-7 inline-block cursor-pointer"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={1000}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="p-7 inline-block cursor-pointer"
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="p-7 inline-block cursor-pointer"
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                className="p-7 inline-block cursor-pointer"
                activeClass="active"
                to="exp"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                className="p-7 inline-block cursor-pointer"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
