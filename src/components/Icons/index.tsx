import '@fontsource/material-icons'
import '@fontsource/material-icons-rounded'

type Props = {
  icon: string
  type?: 'Filled' | 'Rounded'
  className?: string
}

export const MaterialIcons = ({ icon, type = 'Filled', className = '' }: Props) => {
  return (
    <>
      <span
        className={`${type === 'Rounded' ? 'material-icons-round' : 'material-icons'}${
          className === '' ? `` : ` ${className}`
        }`}
      >
        {icon}
      </span>
    </>
  )
}

export default MaterialIcons
