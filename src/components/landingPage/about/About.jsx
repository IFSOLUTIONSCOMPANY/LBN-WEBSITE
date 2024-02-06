import Title from "./AboutTitle";
import Card from "./AboutCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faChartSimple, faFutbol, faPersonRunning } from "@fortawesome/free-solid-svg-icons";


function About() {
  return (
    <section className="text-gray-700 body-font" data-aos="fade-up">
      <div className="container px-5 py-24 mx-auto">
        <Title />
        <div className="flex flex-wrap -m-4">
          <Card icon={faPersonRunning} />
          <Card icon={faChartSimple} />
          <Card icon={faFutbol} />
        </div>
      </div>
    </section>
  );
}


export default About;