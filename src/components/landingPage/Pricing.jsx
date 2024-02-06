import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Stats from "./Stats";
import { faGift } from "@fortawesome/free-solid-svg-icons";

function Pricing() {
  return (
    <div className="max-w-full md:max-w-6xl mx-auto sm:px-8 overflow-hidden">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="mx-auto mb-[60px] max-w-[510px] text-center" data-aos="fade-up">
            <span className="mb-2 block text-lg font-semibold text-accent">
              Pricing Table
            </span>
            <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
              Awesome Pricing Plan <FontAwesomeIcon icon={faGift} className="text-accent" />
            </h2>
            <p className="text-base text-body-color dark:text-dark-6">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </div>
        </div>
      </div>
      <div className="relative block flex flex-col cb:flex-row items-center">
        <div className="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg md:-mr-4 border border-1 border-gray-200 reflect cursor-default" data-aos="fade-right">
          <div className="bg-base-300 text-black rounded-lg border-t border-gray-100 shadow-sm overflow-hiddent">
            <div>
              <img
                className="w-full h-24 object-cover object-top"
                src="/assets/images/pack/illustration1.png"
                alt=""
              />
            </div>
            <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-5 text-black px-8 lg:px-6">
              <h3 className="text-lg font-bold uppercase p-3 text-center tracking-wide text-accent">
                Basic<span className="font-light ml-2 text-accent">Plan</span>
              </h3>
              <h4 className="text-4xl text-gray-900 text-center pb-6 font-bold flex items-center justify-center ">
                <span className="text-lg text-white -ml-2 mr-1">$</span>
                <span className="text-lg text-white">48</span>
              </h4>
              <p className="text-sm text-gray-200">
                In our basic plan you can take advantage of all these features
                below.
              </p>
            </div>

            <div className="flex flex-wrap mt-8 px-6">
              <ul>
                <li className="flex items-center">
                  <div className=" rounded-full p-2 fill-current text-accent">
                    <svg
                      className="w-6 h-6 align-middle"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-100 text-lg ml-3 text-white">
                    Awesome Feature
                  </span>
                </li>
                <li className="flex items-center">
                  <div className=" rounded-full p-2 fill-current text-accent">
                    <svg
                      className="w-6 h-6 align-middle"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-100 text-lg ml-3 text-white">
                    And Another Cool Feature
                  </span>
                </li>
                <li className="flex items-center">
                  <div className=" rounded-full p-2 fill-current text-accent">
                    <svg
                      className="w-6 h-6 align-middle"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-100 text-lg ml-3 text-white">
                    One More Feature
                  </span>
                </li>
              </ul>
            </div>
            <div className="block flex items-center p-8  uppercase">
              <a
                href="#_"
                className="mt-3 text-lg font-semibold bg-base-100 w-full text-white rounded px-6 py-4 block shadow-sm  text-center hover:bg-accent transition duration-300 ease-in-out"
              >
                Select This Plan
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-md cb:mt-24 cb:w-2/3 lg:w-1/3 cb:my-24 my-8 relative z-10 bg-base-300 rounded-lg shadow-lg reflect border border-1 border-gray-200 cursor-default " data-aos="fade-up">
          <div className="text-sm leading-none rounded-t bg-accent text-white font-semibold uppercase py-4 text-center tracking-wide">
            Most Popular
          </div>
          <div>
            <img
              className="w-full h-24 object-cover"
              src="/assets/images/pack/illustration2.png"
              alt=""
            />
          </div>
          <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-5 text-black px-8 lg:px-6">
            <h3 className="text-lg font-bold uppercase p-3 pb-1 text-center tracking-wide">
              <span className="text-accent">Pro</span>
              <span className="font-light ml-2 text-accent">Plan</span>
            </h3>
            <h4 className="text-5xl text-gray-900 text-center pb-6 font-bold flex items-center justify-center">
              <span className="text-lg text-white -ml-2 mr-1">$</span>
              <span className="text-lg text-white">98</span>
            </h4>
            <p className="text-gray-200 text-sm">
              Our most popular package is the Pro Plan which gives you access to
              the following:
            </p>
          </div>
          <div className="flex pl-12 justify-start sm:justify-start mt-8">
            <ul>
              <li className="flex items-center">
                <div className="rounded-full p-2 fill-current text-accent">
                  <svg
                    className="w-6 h-6 align-middle"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <span className="text-gray-100 text-lg ml-3">
                  Really Cool Features
                </span>
              </li>
              <li className="flex items-center">
                <div className=" rounded-full p-2 fill-current text-accent">
                  <svg
                    className="w-6 h-6 align-middle"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <span className="text-gray-100 text-lg ml-3">
                  Another Cool Feature
                </span>
              </li>
              <li className="flex items-center">
                <div className=" rounded-full p-2 fill-current text-accent">
                  <svg
                    className="w-6 h-6 align-middle"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <span className="text-gray-100 text-lg ml-3">And One More</span>
              </li>
            </ul>
          </div>

          <div className="block flex items-center p-8  uppercase">
            <a
              href="#_"
              className="mt-3 text-lg font-semibold bg-base-100 w-full text-white rounded px-6 py-4 block shadow-sm  text-center hover:bg-accent transition duration-300 ease-in-out"
            >
              Select This Plan
            </a>
          </div>
        </div>
        <div className="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-ml-4 reflect cursor-default border border-1 border-gray-200" data-aos="fade-left">
          <div className="bg-base-300 text-black rounded-lg shadow-inner shadow-lg overflow-hidden">
            <div>
              <img
                className="w-full h-24 object-cover object-top"
                src="/assets/images/pack/illustration3.png"
                alt=""
              />
            </div>
            <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-5 text-black px-8 lg:px-8">
              <h3 className="text-lg font-bold uppercase p-3 pb-1 text-center tracking-wide">
                <span className="text-accent">Premium</span>
                <span className="font-light ml-2 text-accent">Plan</span>
              </h3>
              <h4 className="text-4xl text-gray-900 text-center pb-6 font-bold flex items-center justify-center">
                <span className="text-lg text-white -ml-2 mr-1">$</span>
                <span className="text-lg text-white">128</span>
              </h4>
              <p className="text-gray-200 text-sm pl-2">
                With our premium plan you can take advantage of all the
                following features:
              </p>
            </div>
            <div className="flex flex-wrap mt-8 px-8">
              <ul>
                <li className="flex items-center">
                  <div className=" rounded-full p-2 fill-current text-accent">
                    <svg
                      className="w-6 h-6 align-middle"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-100 text-lg ml-3">
                    Totally Tubular Feature
                  </span>
                </li>
                <li className="flex items-center">
                  <div className=" rounded-full p-2 fill-current text-accent">
                    <svg
                      className="w-6 h-6 align-middle"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-100 text-lg ml-3">
                    Super Cool Feature
                  </span>
                </li>
                <li className="flex items-center">
                  <div className=" rounded-full p-2 fill-current text-accent">
                    <svg
                      className="w-6 h-6 align-middle"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-100 text-lg ml-3">And One More</span>
                </li>
              </ul>
            </div>

            <div className="block flex items-center p-8  uppercase">
              <a
                href="#_"
                className="mt-3 text-lg font-semibold bg-base-100 w-full text-white rounded px-6 py-4 block shadow-sm  text-center hover:bg-accent transition duration-300 ease-in-out"
              >
                Select This Plan
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <Stats /> */}
    </div>
  );
}

export default Pricing;
