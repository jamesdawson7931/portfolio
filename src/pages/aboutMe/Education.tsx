import "./styles/education.scss";

interface RecordProps {
  place: string;
  education: string;
}

function Record({ place, education }: RecordProps) {
  return (
    <div className={"record"}>
      <p className={"record-place"}>{place}</p>
      <p className={"record-education"}>{education}</p>
    </div>
  );
}

export default function Education() {
  return (
    <div id={"about-me-education"}>
      <h3 className={"title"}>Education</h3>
      <div className={"records"}>
        <div className="arrow" />
        <Record place={"University of Derby"} education={"Fine Art"} />
        <Record
          place={"Heriot-Watt University"}
          education={"Artificial Intelligence"}
        />
        <Record place={"Ironhack"} education={"Fullstack Web Development"} />
      </div>
    </div>
  );
}
