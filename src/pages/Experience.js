import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">

      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            3D Printing Ambassador
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Makers For Change
          </h4>
          <p>Donated 600+ 3D Printed toys to local community churches, schools and shelters</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            STEM Summer Camp Counselor
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            NYC First Robotics
          </h4>
          <p>Developed and led lessons plans that taught students fundamental Java needed for FTC robotics </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - Present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Columbia University School of Engineering and Applied Sciences, New York, New York
          </h3>

          <h6 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h6>

          <p> Began Studying Computer Science and Applied Mathematics</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - Present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Engineering Associate
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Columbia Daily Spectator
          </h4>
          <p>Planned and upheld multiple Columbia Spectator  website applications such as Culpa.io, CDS, and The Shaft.
          ensuring  stability with HTML, CSS, Javascript, and React.js.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Summer 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Development Engineer Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            IBM Quantum
          </h4>
          <p>
          Developed benchmarking tool in Python to perform in-depth research on IBM's Qiskit transpilation algorithms.
          </p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  );
}

export default Experience;