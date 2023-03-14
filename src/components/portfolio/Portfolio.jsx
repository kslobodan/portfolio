import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Marvel Heroes - React",
    github: "https://github.com/kslobodan/MarvelApi/tree/master",
    demo: "",
  },
  {
    id: 2,
    image: IMG2,
    title: "Text & Code Editor - React",
    github: "https://github.com/kslobodan/code_formatter/tree/master",
    demo: "",
  },
  {
    id: 3,
    image: IMG3,
    title: "Salsa - Vue",
    github: "",
    demo: "https://salsa.rs",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Frontend Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                {github && (
                  <a href={github} className="btn" target="_blank">
                    Github
                  </a>
                )}
                {demo && (
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
