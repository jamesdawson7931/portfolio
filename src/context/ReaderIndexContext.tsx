import React, {
  Children,
  createContext,
  isValidElement,
  type ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react'
import type { ReaderSectionsStripProps } from '../pages/reader/ReaderSectionsStrip.tsx'
import type { ReaderSectionProps } from '../pages/reader/ReaderSection.tsx'

type ReaderIndex = string[][]

type CurrentReaderIndex = {
  section: number
  subsection: number
}

interface ReaderIndexContext {
  readerIndex: string[][]
  setReaderIndex: React.Dispatch<React.SetStateAction<string[][]>>
  currentReaderIndex: CurrentReaderIndex
  setCurrentReaderIndex: React.Dispatch<
    React.SetStateAction<CurrentReaderIndex>
  >
}

interface ReaderIndexProviderProps {
  children: ReactNode
}

const defaultCurrentReaderIndex = {
  section: 0,
  subsection: 0,
}

const initialContext: ReaderIndexContext = {
  readerIndex: [],
  setReaderIndex: () => {},
  currentReaderIndex: defaultCurrentReaderIndex,
  setCurrentReaderIndex: () => {},
}

const ReaderIndexContext = createContext<ReaderIndexContext>(initialContext)

export function ReaderIndexProvider({ children }: ReaderIndexProviderProps) {
  const [readerIndex, setReaderIndex] = useState<ReaderIndex>([])
  const [currentReaderIndex, setCurrentReaderIndex] = useState(
    defaultCurrentReaderIndex
  )

  return (
    <ReaderIndexContext.Provider
      value={{
        readerIndex,
        setReaderIndex,
        currentReaderIndex,
        setCurrentReaderIndex,
      }}
    >
      {children}
    </ReaderIndexContext.Provider>
  )
}

export function useReaderIndex() {
  const {
    readerIndex,
    setReaderIndex,
    currentReaderIndex,
    setCurrentReaderIndex,
  } = useContext(ReaderIndexContext)

  function initReaderIndex(children: ReactNode) {
    const index = []
    const sectionStrips = Children.toArray(children)
    for (const sectionStrip of sectionStrips) {
      if (isValidElement<ReaderSectionsStripProps>(sectionStrip)) {
        const titleSection = Children.toArray(
          sectionStrip.props.titleSection
        )[0]
        const subSections = Children.toArray(sectionStrip.props.children)
        if (isValidElement<ReaderSectionProps>(titleSection)) {
          const indexSectionStrip = [titleSection.props.title]
          for (const subSection of subSections) {
            if (isValidElement<ReaderSectionProps>(subSection)) {
              indexSectionStrip.push(subSection.props.title)
            }
          }
          index.push(indexSectionStrip)
        }
      }
    }
    setReaderIndex(index)
  }

  return useMemo(
    () => ({
      initReaderIndex,
      readerIndex,
      currentReaderIndex,
    }),
    [currentReaderIndex, initReaderIndex, readerIndex]
  )
}
