import { type ReactNode, useEffect, useRef } from 'react'
import './styles/readerSectionFrame.scss'
import { useReaderSectionFrameWidth } from '../../context/ReaderFrameWidthContext.tsx'

interface ReaderSectionFrameProps {
  children: ReactNode
}

export default function ReaderSectionFrame({
  children,
}: ReaderSectionFrameProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const { setWidth } = useReaderSectionFrameWidth()

  function updateFrameWidth() {
    if (elementRef.current) {
      return setWidth(elementRef.current.getBoundingClientRect().width)
    }
  }

  useEffect(() => {
    updateFrameWidth()
    window.addEventListener('resize', updateFrameWidth)

    return () => {
      window.removeEventListener('resize', updateFrameWidth)
    }
  }, [])

  return (
    <div ref={elementRef} id={'reader-section-frame'}>
      {children}
    </div>
  )
}
