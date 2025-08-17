import cn from 'classnames'
import { useReaderIndex } from '../../../context/ReaderIndexContext.tsx'
import ReaderNavTitle from './ReaderNavTitle.tsx'

interface ReaderSubSectionNavProps {
  sectionIndex: number
  isExpanded: boolean
}

export default function ReaderSubsectionNav({
  sectionIndex,
  isExpanded,
}: ReaderSubSectionNavProps) {
  const expandedClass = isExpanded ? 'expanded' : ''
  const { readerIndex, currentReaderIndex, setCurrentReaderIndex } =
    useReaderIndex()
  const subsections = readerIndex[sectionIndex]
  const hasSubsections = subsections.length > 1

  const isSelectedSubsection = (subsectionIndex: number) =>
    currentReaderIndex.section === sectionIndex &&
    currentReaderIndex.subsection === subsectionIndex

  return (
    <>
      {hasSubsections && (
        <div className={cn('reader-subsection-nav', expandedClass)}>
          {subsections.slice(1).map((subsection, i) => (
            <ReaderNavTitle
              title={subsection}
              isSelected={isSelectedSubsection(i)}
              onClick={() => {
                setCurrentReaderIndex({ section: sectionIndex, subsection: i })
              }}
              key={i}
            />
          ))}
        </div>
      )}
    </>
  )
}
