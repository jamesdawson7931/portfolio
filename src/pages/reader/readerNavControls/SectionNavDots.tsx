import './styles/sectionNavDots.scss'
import { useReaderIndex } from '../../../context/ReaderIndexContext.tsx'
import cn from 'classnames'
import React from 'react'

interface NavDotProps {
  isSelected: boolean
  onClick: () => void
}

function NavDot({ isSelected, onClick }: NavDotProps) {
  const selectedClass = isSelected ? 'selected' : ''
  return <div className={cn('nav-dot', selectedClass)} onClick={onClick} />
}

export function SectionNavDots() {
  const {
    currentReaderIndex,
    readerIndex,
    setSectionIndex,
    incrementSectionIndex,
    decrementSectionIndex,
  } = useReaderIndex()
  const numberOfSections = readerIndex.length

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (event.deltaY > 0) {
      incrementSectionIndex()
    } else {
      decrementSectionIndex()
    }
  }

  return (
    <div id={'reader-section-nav-dots'} onWheel={handleWheel}>
      {Array.from({ length: numberOfSections }, (_, i) => (
        <NavDot
          key={i}
          isSelected={currentReaderIndex.section === i}
          onClick={() => {
            setSectionIndex(i)
          }}
        />
      ))}
    </div>
  )
}
