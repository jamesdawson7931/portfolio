import { useState } from 'react'
import './styles/navBottomPanel.scss'
import CaretIcon from '../../../icons/caret.svg?react'
import { useReaderIndex } from '../../../context/ReaderIndexContext.tsx'
import cn from 'classnames'
import ReaderNav from '../navSidePanel/ReaderNav.tsx'

interface NavPreviewBarProps {
  isExpanded: boolean
  onClick: () => void
}

interface NavBottomPanelProps {
  articleTitle: string
}

function NavPreviewBar({ isExpanded, onClick }: NavPreviewBarProps) {
  const { currentReaderIndex, readerIndex } = useReaderIndex()
  const currentSection =
    readerIndex[currentReaderIndex.section] != undefined
      ? readerIndex[currentReaderIndex.section][currentReaderIndex.subsection]
      : ''
  const expandedClass = isExpanded ? 'expanded' : ''

  return (
    <div id="nav-preview-bar" className={expandedClass} onClick={onClick}>
      <div className={'spacer'} />
      <div id={'nav-preview-title-container'}>
        <div className={'nav-dot'} />
        <h3 className={'nav-preview-title'}>{currentSection}</h3>
      </div>
      <CaretIcon className={cn('caret-icon', expandedClass)} />
    </div>
  )
}

export default function NavBottomPanel({ articleTitle }: NavBottomPanelProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const expandedClass = isExpanded ? 'expanded' : ''

  function onClick() {
    setIsExpanded(!isExpanded)
  }

  return (
    <div id="nav-bottom-panel" className={expandedClass}>
      <NavPreviewBar isExpanded={isExpanded} onClick={onClick} />
      <div className={cn('content', expandedClass)}>
        <ReaderNav articleTitle={articleTitle} />
      </div>
    </div>
  )
}
