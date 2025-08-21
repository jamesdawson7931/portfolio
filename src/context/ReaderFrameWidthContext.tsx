import React, {
  createContext,
  type ReactNode,
  useContext,
  useState,
} from 'react'

interface ReaderFrameDimensions {
  width: number
  height: number
}

interface ReaderSectionFrameDimensionsContext {
  dimensions: ReaderFrameDimensions
  setDimensions: React.Dispatch<React.SetStateAction<ReaderFrameDimensions>>
}

interface ReaderSectionFrameDimensionsProviderProps {
  children: ReactNode
}

const initialContext: ReaderSectionFrameDimensionsContext = {
  dimensions: { width: 0, height: 0 },
  setDimensions: () => {},
}

const ReaderSectionFrameDimensionsContext =
  createContext<ReaderSectionFrameDimensionsContext>(initialContext)

export function ReaderSectionFrameWidthProvider({
  children,
}: ReaderSectionFrameDimensionsProviderProps) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  return (
    <ReaderSectionFrameDimensionsContext.Provider
      value={{ dimensions, setDimensions }}
    >
      {children}
    </ReaderSectionFrameDimensionsContext.Provider>
  )
}

export function useReaderSectionFrameDimensions() {
  return useContext(ReaderSectionFrameDimensionsContext)
}
