import { type ReactNode, useEffect } from 'react'
import './styles/readerSections.scss'
import { useReaderIndex } from '../../context/ReaderIndexContext.tsx'
import { useReaderSectionFrameWidth } from '../../context/ReaderFrameWidthContext.tsx'

interface ReaderSectionsProps {
  children: ReactNode
}

export function ReaderSections({ children }: ReaderSectionsProps) {
  const { initReaderIndex, currentReaderIndex } = useReaderIndex()
  const { width } = useReaderSectionFrameWidth()
  const topOffset = currentReaderIndex.section * -width
  const leftOffset = currentReaderIndex.subsection * -width

  useEffect(() => {
    initReaderIndex(children)
  }, [])

  return (
    <div id={'reading-sections'} style={{ top: topOffset, left: leftOffset }}>
      {children}
    </div>
  )
}
