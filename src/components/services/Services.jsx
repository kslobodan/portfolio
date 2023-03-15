import "./services.css";
import { BiCheck } from "react-icons/bi";

const data = [
  {
    type: "frontend",
    title: "Frontend",
    list: [
      "Web applications using React",
      "Better and safer code with TypeScript",
      "Responsive Design",
    ],
  },
  {
    type: "backend",
    title: "Backend",
    list: [
      "Web applications",
      "Desktop applications",
      "Database design",
      "Implementing DLL files written in C++",
      "Translating Visual Basic apps to C#",
    ],
  },
  {
    type: "other",
    title: "Other",
    list: [
      "Azure DevOps/Cloud",
      "CI/CD",
      "Product Owner",
      "Reliability, focus, efficiency",
    ],
  },
];

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {data.map((d) => {
          return (
            <article key={d.type} className="service">
              <div className="service__head">
                <h3>{d.title}</h3>
              </div>

              <ul className="service__list">
                {d.list.map((option, index) => {
                  return (
                    <li key={index}>
                      <BiCheck className="service__list-icon" />
                      <p>{option}</p>
                    </li>
                  );
                })}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
