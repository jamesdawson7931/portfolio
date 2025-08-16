import {type ReactNode} from "react";

export default function ReadingPanel({children}: {children: ReactNode}) {
    return (<div id={"reading-panel"}>
        {children}
    </div>)
}