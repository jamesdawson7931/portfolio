import Page from '../Page.tsx'
import ReadingPanel from './ReadingPanel.tsx'
import ReaderSectionFrame from './ReaderSectionFrame.tsx'
import { ReaderSections } from './ReaderSections.tsx'
import { ReaderSectionsStrip } from './ReaderSectionsStrip.tsx'
import { ReaderSection } from './ReaderSection.tsx'
import './styles/reader.scss'
import NavSidePanel from './navSidePanel/NavSidePanel.tsx'

export default function Reader() {
  return (
    <Page className={'reader-page'}>
      <NavSidePanel articleTitle={'Lorem'} />
      <ReadingPanel>
        <ReaderSectionFrame>
          <ReaderSections>
            <ReaderSectionsStrip
              titleSection={<ReaderSection title={'Section 1'} />}
            >
              <ReaderSection title={'Subsection 1'} />
              <ReaderSection title={'Subsection 2'} />
              <ReaderSection title={'Subsection 3'} />
            </ReaderSectionsStrip>
            <ReaderSectionsStrip
              titleSection={<ReaderSection title={'Section 2'} />}
            >
              <ReaderSection title={'Subsection 1'} />
              <ReaderSection title={'Subsection 2'} />
              <ReaderSection title={'Subsection 3'} />
              <ReaderSection title={'Subsection 4'} />
              <ReaderSection title={'Subsection 5'} />
            </ReaderSectionsStrip>
            <ReaderSectionsStrip
              titleSection={<ReaderSection title={'Section 3'} />}
            />
          </ReaderSections>
        </ReaderSectionFrame>
      </ReadingPanel>
    </Page>
  )
}
