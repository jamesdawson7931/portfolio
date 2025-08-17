import cn from 'classnames'
import './styles/readerNavTitle.scss'

interface NavDotProps {
  isSelected: boolean
}

interface ReaderNavTitleProps {
  title: string
  isSelected: boolean
  onClick?: () => void
  className?: string
}

function NavDot({ isSelected }: NavDotProps) {
  const selectedClass = isSelected ? 'selected' : ''
  return <div className={cn('nav-dot', selectedClass)} />
}

export default function ReaderNavTitle({
  title,
  isSelected,
  onClick,
  className,
}: ReaderNavTitleProps) {
  const selectedClass = isSelected ? 'selected' : ''
  const clickableClass = onClick !== undefined ? 'clickable' : ''
  return (
    <div
      className={cn('reader-nav-title', clickableClass, className)}
      onClick={onClick}
    >
      <NavDot isSelected={isSelected} />
      <h6 className={cn('title', selectedClass)}>{title}</h6>
    </div>
  )
}
