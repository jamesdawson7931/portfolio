import { type ReactNode } from 'react'
import './styles/readingPanel.scss'
import { SectionNavDots } from './readerNavControls/SectionNavDots.tsx'

export default function ReadingPanel({ children }: { children: ReactNode }) {
  return (
    <div id={'reading-panel'}>
      <SectionNavDots />
      {children}
    </div>
  )
}
