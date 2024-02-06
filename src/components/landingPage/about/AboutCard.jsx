import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import { faChartSimple, faFutbol, faPersonRunning } from "@fortawesome/free-solid-svg-icons";

export default function AboutCard({icon}) {
  return (
    <div className="p-4 md:w-1/3">
      <div className="flex rounded-lg h-full bg-base-300 p-8 flex-col shadow-xl">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-accent text-white flex-shrink-0">
            <FontAwesomeIcon icon={icon} />
          </div>
          <h2 className="text-gray-100 text-lg title-font font-medium">
            Shooting Stars
          </h2>
        </div>
        <div className="flex-grow">
          <p className="leading-relaxed text-gray-200">
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan
            taxidermy. Gastropub indxgo juice poutine.
          </p>
          <a className="mt-3 text-accent inline-flex items-center">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
