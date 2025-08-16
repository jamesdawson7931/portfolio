import type { ReactNode } from 'react'

export interface ReaderSectionsStripProps {
  titleSection: ReactNode
  children?: ReactNode
}

export function ReaderSectionsStrip({
  titleSection,
  children,
}: ReaderSectionsStripProps) {
  return (
    <div className={'reader-sections-strip'}>
      {titleSection}
      {children}
    </div>
  )
}
