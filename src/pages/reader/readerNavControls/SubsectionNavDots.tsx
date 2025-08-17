import './styles/subsectionNavDots.scss'
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

export function SubsectionNavDots() {
  const {
    currentReaderIndex,
    readerIndex,
    setSubsectionIndex,
    incrementSubsectionIndex,
    decrementSubsectionIndex,
  } = useReaderIndex()
  const numberOfSubsections =
    readerIndex[currentReaderIndex.section]?.length || 0

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (event.deltaY > 0) {
      incrementSubsectionIndex()
    } else {
      decrementSubsectionIndex()
    }
  }

  return (
    <div id={'reader-subsection-nav-dots'} onWheel={handleWheel}>
      {Array.from({ length: numberOfSubsections }, (_, i) => (
        <NavDot
          key={i}
          isSelected={currentReaderIndex.subsection === i}
          onClick={() => {
            setSubsectionIndex(i)
          }}
        />
      ))}
    </div>
  )
}
