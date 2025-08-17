import cn from 'classnames'

interface NavDotProps {
  isSelected: boolean
}

interface ReaderNavTitleProps {
  title: string
  isSelected: boolean
  onClick: () => void
}

function NavDot({ isSelected }: NavDotProps) {
  const selectedClass = isSelected ? 'selected' : ''
  return <div className={cn('nav-dot', selectedClass)} />
}

export default function ReaderNavTitle({
  title,
  isSelected,
  onClick,
}: ReaderNavTitleProps) {
  const selectedClass = isSelected ? 'selected' : ''
  return (
    <div className={'reader-nav-title'} onClick={onClick}>
      <NavDot isSelected={isSelected} />
      <h6 className={cn('title', selectedClass)}>{title}</h6>
    </div>
  )
}
