interface WithReadingNavControlsProps {
    children: ReactNode;
}

export default function WithReadingNavControls({children}: WithReadingNavControlsProps) {
    return <div id={"with-reader-nav-controls"}>
        {children}
    </div>
}