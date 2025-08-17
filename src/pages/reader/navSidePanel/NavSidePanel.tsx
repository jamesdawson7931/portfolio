import './styles/navSidePanel.scss'
import ReaderNav from './ReaderNav.tsx'

interface NavSidePanelProps {
  articleTitle: string
}

export default function NavSidePanel({ articleTitle }: NavSidePanelProps) {
  return (
    <div id="nav-side-panel">
      <ReaderNav articleTitle={articleTitle} />
    </div>
  )
}
