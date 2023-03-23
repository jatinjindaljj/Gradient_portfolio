import React from "react";
import CaseStudyTile from "../../component/CaseStudyTile/CaseStudyTile";
import classes from "./CaseStudies.module.css";
import example1 from "../../assets/caseStudy/caseStudyExaple1.svg";
import { v4 as uuid } from "uuid";
const CaseStudies = () => {
  const data = [
    {
      image: example1,
      heading: "Redesigning humana app",
      buttonText: "READ FULL CASE STUDY",
      backgroundGradient: "#C84E89,#F15F79",
      sectionBackground: "#C84E89",
    },
    {
      image: example1,
      heading: "Redesigning humana app",
      buttonText: "READ FULL CASE STUDY",
      backgroundGradient: "#43B1EF,#B600E3",
      sectionBackground: "#8A44E8",
    },
    {
      image: example1,
      heading: "Redesigning humana app",
      buttonText: "READ FULL CASE STUDY",
      backgroundGradient: "#FFC700,#FF00F5",
      sectionBackground: "#FF522E",
    },
  ];
  return (
    <div className={classes.CaseStudiesContainer}>
      {data.map((dta) => (
        <div key={uuid()}>
          <CaseStudyTile
            heading={dta.heading}
            buttonText={dta.buttonText}
            image={dta.image}
            backgroundGradient={dta.backgroundGradient}
            sectionBackground={dta.sectionBackground}
          />
        </div>
      ))}
    </div>
  );
};

export default CaseStudies;
