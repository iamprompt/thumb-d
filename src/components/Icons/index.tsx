type Props = {
  icon: string
  type?: 'Filled' | 'Rounded'
  className?: string
  onClick?: () => void
}

export const MaterialIcons = ({
  icon,
  type = 'Filled',
  className = '',
  onClick,
}: Props) => {
  return (
    <>
      <span
        className={`${
          type === 'Rounded' ? 'material-icons-round' : 'material-icons'
        }${className === '' ? `` : ` ${className}`}`}
        onClick={onClick}
      >
        {icon}
      </span>
    </>
  )
}

export default MaterialIcons
