import type {ReactNode} from "react";

export interface ReaderSectionProps {
    title: string;
    children?: ReactNode;
}

export function ReaderSection({title, children}: ReaderSectionProps) {
    return <div className={"reader-section"}>
        {children}
    </div>
}