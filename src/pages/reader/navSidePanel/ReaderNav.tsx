import ReaderSectionNav from './ReaderSectionNav.tsx'
import { useReaderIndex } from '../../../context/ReaderIndexContext.tsx'
import ReaderNavTitle from './ReaderNavTitle.tsx'

interface ReaderNavProps {
  articleTitle: string
}

export default function ReaderNav({ articleTitle }: ReaderNavProps) {
  const { readerIndex } = useReaderIndex()

  return (
    <div className="reader-nav">
      <ReaderNavTitle
        title={articleTitle}
        isSelected={true}
        onClick={() => {}}
      />
      {readerIndex.map((_, i) => (
        <ReaderSectionNav sectionIndex={i} />
      ))}
    </div>
  )
}
