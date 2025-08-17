import { type ReactNode } from 'react'
import './styles/readingPanel.scss'

export default function ReadingPanel({ children }: { children: ReactNode }) {
  return <div id={'reading-panel'}>{children}</div>
}
