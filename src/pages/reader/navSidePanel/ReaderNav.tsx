import './styles/readerNav.scss'
import ReaderSectionNav from './ReaderSectionNav.tsx'
import { useReaderIndex } from '../../../context/ReaderIndexContext.tsx'
import ReaderNavTitle from './ReaderNavTitle.tsx'
import React from 'react'

interface ReaderNavProps {
  articleTitle: string
}

export default function ReaderNav({ articleTitle }: ReaderNavProps) {
  const { readerIndex, incrementReaderIndex, decrementReaderIndex } =
    useReaderIndex()

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (event.deltaY > 0) {
      incrementReaderIndex()
    } else {
      decrementReaderIndex()
    }
  }

  return (
    <div className={'reader-nav-scroll-wrapper'} onWheel={handleWheel}>
      <div className="reader-nav">
        <ReaderNavTitle title={articleTitle} isSelected={true} />
        {readerIndex.map((_, i) => (
          <ReaderSectionNav sectionIndex={i} />
        ))}
      </div>
    </div>
  )
}
