import "./styles/workHistory.scss";

interface RecordProps {
  startDate: string;
  endDate: string;
  company?: string;
  jobTitle: string;
}

function Record({ startDate, endDate, company, jobTitle }: RecordProps) {
  return (
    <div className={"record"}>
      <p>{`${startDate} / ${endDate}`}</p>
      {company ? <p>{company}</p> : null}
      <p>{jobTitle}</p>
    </div>
  );
}

export default function WorkHistory() {
  return (
    <div id={"about-me-work-history"}>
      <h3 className={"title"}>Work History</h3>
      <div className={"records"}>
        <div className="arrow" />
        <Record
          startDate={"Mar 2020"}
          endDate={"Jun 2020"}
          jobTitle={"Volunteer Game Developer"}
          company={"Humanitarian Operations"}
        />
        <Record
          startDate={"Oct 2020"}
          endDate={"Feb 2021"}
          jobTitle={"Junior Web Developer"}
          company={"BriefYourMarket"}
        />
        <Record
          startDate={"Mar 2021 "}
          endDate={"Jun 2022"}
          jobTitle={"Freelance Web Developer"}
        />
        <Record
          startDate={"Jul 2022"}
          endDate={"Now"}
          jobTitle={"Junior Web Developer"}
          company={"Nurtur Group"}
        />
      </div>
    </div>
  );
}
