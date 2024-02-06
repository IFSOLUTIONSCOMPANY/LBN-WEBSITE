import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

export default function Section() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };
  return (
    <li class="py-12" data-aos="fade-up">
      <article>
        <div class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
          <dl>
            <dt class="sr-only">Published on</dt>
            <dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
              <time datetime="2023-08-05T00:00:00.000Z">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="text-accent"
                />{" "}
                August 5, 2023
              </time>
            </dd>
          </dl>
          <div class="space-y-5 xl:col-span-3">
            <div class="space-y-6">
              <div>
                <h2 class="text-2xl font-bold leading-8 tracking-tight">
                  <span className="text-gray-900 dark:text-gray-100">
                    Messi and Ronaldo - Fight for the best
                  </span>
                </h2>
                <div class="flex flex-wrap mt-3">
                  <span class="mr-3 text-sm badge badge-neutral font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                    Messi
                  </span>
                  <span class="mr-3 text-sm badge badge-neutral font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                    Ronaldo
                  </span>
                  <span class="mr-3 text-sm badge badge-neutral font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                    Soccer
                  </span>
                  <span class="mr-3 text-sm badge badge-neutral font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                    Cup
                  </span>
                </div>
              </div>
              <div class="prose max-w-none text-gray-500 dark:text-gray-400">
                What happen when Messi and Ronaldo are in the same team? Who is gonna be the best player? Who is gonna be the best scorer? Who is gonna be the best dribbler? 
                If you want to know the answer, you have to read this article.
              </div>
            </div>
            <div class="text-base font-medium leading-6">
              <span
                onClick={toggleAccordion}
                className="text-white hover:text-accent dark:hover:text-white transition-colors duration-200 cursor-pointer btn btn-accent"
              >
                Read more ↓
              </span>
            </div>
            {isAccordionOpen && (
              <div class="accordion" data-aos="fade-up">
                <div class="accordion-content mt-5">
                  <div className="">
                    <img
                      src="/assets/images/blog/section_test.jpg"
                      alt="football"
                      className="w-full h-40 object-cover rounded-lg shadow-xl mt-10"
                    />
                    <div className="text-gray-300 font-bold text-3xl mt-5">
                      Messi and Ronaldo are the best players in the world, but,
                      who is better?
                    </div>
                    <p className="text-gray-500 dark:text-gray-200 mt-5">
                      Messi and Ronaldo are two footballing titans, each
                      possessing a unique set of skills and an illustrious
                      career that has left fans and pundits alike engaged in a
                      never-ending debate: who is the better player? Lionel
                      Messi, the diminutive Argentine magician, has spent the
                      majority of his career with Barcelona, captivating
                      audiences with his dribbling prowess, impeccable ball
                      control, and an ability to score goals that defies belief.
                      Messi's effortless ability to navigate through opposing
                      defenses and deliver precise passes has made him a true
                      maestro on the pitch. His records speak volumes, including
                      multiple Ballon d'Or awards, numerous La Liga titles, and
                      a plethora of individual accolades that solidify his
                      status as one of the greatest players of all time. On the
                      other hand, Cristiano Ronaldo, the Portuguese powerhouse,
                      has consistently displayed a relentless work ethic and
                      astonishing athleticism throughout his career. Ronaldo's
                      remarkable ability to score from almost any position on
                      the field, coupled with his incredible jumping ability and
                      speed, has seen him shine for several top clubs, including
                      Manchester United, Real Madrid, Juventus, and the
                      Portuguese national team. Like Messi, Ronaldo boasts an
                      impressive collection of Ballon d'Or trophies and a
                      multitude of championship titles.
                    </p>
                  </div>
                  <div class="flex justify-between mt-5">
                    <div> August 5, 2023 21:54</div>
                    <div className="text-accent">@LBM</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </article>
    </li>
  );
}
