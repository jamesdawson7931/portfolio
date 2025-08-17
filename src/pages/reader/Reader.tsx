import Page from '../Page.tsx'
import ReadingPanel from './ReadingPanel.tsx'
import ReaderSectionFrame from './ReaderSectionFrame.tsx'
import { ReaderSections } from './ReaderSections.tsx'
import { ReaderSectionsStrip } from './ReaderSectionsStrip.tsx'
import { ReaderSection } from './ReaderSection.tsx'
import './styles/reader.scss'
import NavSidePanel from './NavSidePanel.tsx'

export default function Reader() {
  return (
    <Page className={'reader-page'}>
      <NavSidePanel />
      <ReadingPanel>
        <ReaderSectionFrame>
          <ReaderSections>
            <ReaderSectionsStrip titleSection={<ReaderSection title={'1'} />}>
              <ReaderSection title={'11'} />
              <ReaderSection title={'12'} />
              <ReaderSection title={'13'} />
            </ReaderSectionsStrip>
            <ReaderSectionsStrip titleSection={<ReaderSection title={'2'} />}>
              <ReaderSection title={'21'} />
              <ReaderSection title={'22'} />
              <ReaderSection title={'23'} />
              <ReaderSection title={'24'} />
              <ReaderSection title={'25'} />
            </ReaderSectionsStrip>
            <ReaderSectionsStrip titleSection={<ReaderSection title={'3'} />} />
          </ReaderSections>
        </ReaderSectionFrame>
      </ReadingPanel>
    </Page>
  )
}
