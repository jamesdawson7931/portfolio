import React, {
  createContext,
  type ReactNode,
  useContext,
  useState,
} from 'react'

interface ReaderSectionFrameWidthContext {
  width: number
  setWidth: React.Dispatch<React.SetStateAction<number>>
}

interface ReaderSectionFrameWidthProviderProps {
  children: ReactNode
}

const initialContext: ReaderSectionFrameWidthContext = {
  width: 0,
  setWidth: () => {},
}

const ReaderSectionFrameWidthContext =
  createContext<ReaderSectionFrameWidthContext>(initialContext)

export function ReaderSectionFrameWidthProvider({
  children,
}: ReaderSectionFrameWidthProviderProps) {
  const [width, setWidth] = useState(0)

  return (
    <ReaderSectionFrameWidthContext.Provider value={{ width, setWidth }}>
      {children}
    </ReaderSectionFrameWidthContext.Provider>
  )
}

export function useReaderSectionFrameWidth() {
  return useContext(ReaderSectionFrameWidthContext)
}
