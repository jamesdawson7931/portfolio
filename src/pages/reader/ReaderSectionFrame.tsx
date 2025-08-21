import { type ReactNode, useEffect, useRef } from 'react'
import './styles/readerSectionFrame.scss'
import { useReaderSectionFrameDimensions } from '../../context/ReaderFrameWidthContext.tsx'
import { SubsectionNavDots } from './readerNavControls/SubsectionNavDots.tsx'

interface ReaderSectionFrameProps {
  children: ReactNode
}

export default function ReaderSectionFrame({
  children,
}: ReaderSectionFrameProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const { setDimensions } = useReaderSectionFrameDimensions()

  function updateFrameDimensions() {
    if (elementRef.current) {
      setDimensions({
        height: elementRef?.current?.getBoundingClientRect().height || 0,
        width: elementRef?.current?.getBoundingClientRect().width || 0,
      })
    }
  }

  useEffect(() => {
    updateFrameDimensions()
    window.addEventListener('resize', updateFrameDimensions)

    return () => {
      window.removeEventListener('resize', updateFrameDimensions)
    }
  }, [])

  return (
    <div ref={elementRef} id={'reader-section-frame'}>
      <SubsectionNavDots />
      <div id={'inner-reader-section-frame'}>{children}</div>
    </div>
  )
}
