import { useReaderIndex } from '../../../context/ReaderIndexContext.tsx'
import ReaderNavTitle from './ReaderNavTitle.tsx'
import ReaderSubsectionNav from './ReaderSubsectionNav.tsx'

interface ReaderSectionNavProps {
  sectionIndex: number
}

export default function ReaderSectionNav({
  sectionIndex,
}: ReaderSectionNavProps) {
  const { readerIndex, currentReaderIndex, setSectionIndex } = useReaderIndex()
  const isSelected = currentReaderIndex.section === sectionIndex

  return (
    <div className={'reader-section-nav'}>
      <ReaderNavTitle
        title={readerIndex[sectionIndex][0]}
        isSelected={isSelected}
        onClick={() => {
          setSectionIndex(sectionIndex)
        }}
      />
      <ReaderSubsectionNav
        sectionIndex={sectionIndex}
        isExpanded={isSelected}
      />
    </div>
  )
}
