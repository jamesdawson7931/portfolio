import { Children, isValidElement, type ReactNode, useEffect } from 'react'
import type { ReaderSectionsStripProps } from './ReaderSectionsStrip.tsx'
import type { ReaderSectionProps } from './ReaderSection.tsx'

interface ReaderSectionsProps {
  children: ReactNode
}

export function ReaderSections({ children }: ReaderSectionsProps) {
  useEffect(() => {
    const childrenArray = Children.toArray(children)
    childrenArray.map((child) => {
      if (isValidElement<ReaderSectionsStripProps>(child)) {
        const titleSection = Children.toArray(child.props.titleSection)
        const subSections = Children.toArray(child.props.children)
        if (isValidElement<ReaderSectionProps>(titleSection[0])) {
          console.log(titleSection[0].props.title)
        }
        subSections.map((ss) => {
          if (isValidElement<ReaderSectionProps>(ss)) {
            console.log(ss.props.title)
          }
        })
      }
    })
  }, [])
  return <div id={'reading-sections'}>{children}</div>
}
