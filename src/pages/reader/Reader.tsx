import Page from '../Page.tsx'
import ReadingPanel from './ReadingPanel.tsx'
import ReaderSectionFrame from './ReaderSectionFrame.tsx'
import './styles/reader.scss'
import NavSidePanel from './navSidePanel/NavSidePanel.tsx'
import NavBottomPanel from './navBottomPanel/NavBottomPanel.tsx'
import type { JSX } from 'react'

interface ReaderProps {
  article: JSX.Element
  articleTitle: string
}

export default function Reader({ article, articleTitle }: ReaderProps) {
  return (
    <Page className={'reader-page'}>
      <NavSidePanel articleTitle={articleTitle} />
      <ReadingPanel>
        <ReaderSectionFrame>{article}</ReaderSectionFrame>
      </ReadingPanel>
      <NavBottomPanel articleTitle={articleTitle} />
    </Page>
  )
}
