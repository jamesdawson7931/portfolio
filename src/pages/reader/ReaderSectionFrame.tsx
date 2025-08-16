import {Children, isValidElement, type ReactNode, useEffect} from "react";

interface ReaderSectionFrameProps {
    children: ReactNode;
}

export default function ReaderSectionFrame({children}: ReaderSectionFrameProps) {
    return <div id={"reader-section-frame"}>
        {children}
    </div>
}