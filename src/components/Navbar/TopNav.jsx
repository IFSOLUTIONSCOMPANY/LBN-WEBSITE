import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import ThemeController from "./ThemeController";
import {
  faSquarePollVertical,
  faNewspaper,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function TopNav() {
  return (
    <div className="bg-base-300/60 relative z-40">
      <div className="container mx-auto md:px-40">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/resultats">Résultats</Link>
                </li>
                <li>
                  <Link to="/actualites">Actualités</Link>
                </li>
              </ul>
            </div>
            <div className="flex space-x-3 ml-5 items-center">
              <Link to="/" className=" text-xl">
                <img
                  src="/assets/images/logos/logo.png"
                  alt="Logo"
                  className="h-10 w-full"
                />
              </Link>
              <Link to="/" className=" text-xl">
                <span className="text-xl font-bold hidden lg:flex text-white">
                  L<span className="text-accent">B</span>M
                </span>
              </Link>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu-horizontal space-x-16 px-1">
              <li className="cursor cursor-pointer hover:text-accent transition-colors duration-200">
                <Link to="/resultats">
                  <FontAwesomeIcon icon={faSquarePollVertical} /> Résultats
                </Link>
              </li>
              <li className="cursor cursor-pointer hover:text-accent transition-colors duration-200">
                <Link to="/actualites">
                  <FontAwesomeIcon icon={faNewspaper} /> Actualités
                </Link>
              </li>
              <li className="cursor cursor-pointer hover:text-accent transition-colors duration-200">
                <Link to="/actualites">
                  <FontAwesomeIcon icon={faNewspaper} /> Prévisions
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end space-x-10">
            <Link
              to="/connexion"
              className="cursor cursor-pointer btn btn-sm btn-accent text-xs text-white"
            >
              <FontAwesomeIcon icon={faUser} /> Connexion
            </Link>
            <ThemeController />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
