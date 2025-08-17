import type { ReactNode } from 'react'
import { useReaderSectionFrameWidth } from '../../context/ReaderFrameWidthContext.tsx'

export interface ReaderSectionProps {
  title: string
  children?: ReactNode
}

export function ReaderSection({ title, children }: ReaderSectionProps) {
  const { width } = useReaderSectionFrameWidth()
  return (
    <div className={'reader-section'} style={{ width }}>
      <p className={'title'}>{title}</p>
    </div>
  )
}
