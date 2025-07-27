import cn from "classnames";
import "./styles/languages.scss";

interface DotsProps {
  selectedDots: number;
}

interface LanguageProps {
  language: string;
  skillLevel: number;
}

function Dots({ selectedDots }: DotsProps) {
  return (
    <div className={"dot-row"}>
      {Array.from({ length: 10 }).map((_d, i) => {
        const isSelected = i < selectedDots;
        const selectedClass = isSelected ? "selected" : "";
        return <div className={cn("dot", selectedClass)} />;
      })}
    </div>
  );
}

function Language({ language, skillLevel }: LanguageProps) {
  return (
    <div className={"language"}>
      <p className={"language-title"}>{language}</p>
      <Dots selectedDots={skillLevel} />
    </div>
  );
}

export default function Languages() {
  return (
    <div id={"about-me-languages"}>
      <h3 className={"title"}>Languages</h3>
      <div className={"languages"}>
        <Language language={"JavaScript"} skillLevel={10} />
        <Language language={"Typescript"} skillLevel={10} />
        <Language language={"CSS"} skillLevel={10} />
        <Language language={"C#"} skillLevel={7} />
        <Language language={"Java"} skillLevel={7} />
        <Language language={"Lua"} skillLevel={5} />
        <Language language={"Python"} skillLevel={3} />
        <Language language={"Bash"} skillLevel={2} />
      </div>
    </div>
  );
}
