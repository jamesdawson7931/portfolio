import type { ReactNode } from 'react'
import { useReaderSectionFrameDimensions } from '../../context/ReaderFrameWidthContext.tsx'
import cn from 'classnames'

export interface ReaderSectionProps {
  title: string
  children?: ReactNode
  className?: string
}

export function ReaderSection({
  title,
  children,
  className,
}: ReaderSectionProps) {
  const {
    dimensions: { width, height },
  } = useReaderSectionFrameDimensions()
  const sectionTitleClass = `${title.toLowerCase().split(' ').join('-')}-section`
  return (
    <div
      className={cn('reader-section', sectionTitleClass, className)}
      style={{ width, height }}
    >
      {children}
    </div>
  )
}
