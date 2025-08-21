import './styles/readerTextSection.scss'
import { ReaderSection } from './ReaderSection'

interface ReaderTextSectionProps {
  title: string
  text: string
}

export default function ReaderTextSection({
  title,
  text,
}: ReaderTextSectionProps) {
  return (
    <ReaderSection title={title} className={'reader-text-section'}>
      <div className={'content'}>
        <h2>{title}</h2>
        <article>{text}</article>
      </div>
    </ReaderSection>
  )
}
