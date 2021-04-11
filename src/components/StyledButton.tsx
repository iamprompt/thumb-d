type Props = {
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => any
  text?: string
  className?: string
}

const StyledButton = ({ type = 'button', onClick, text = '' }: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-gradient-to-r from-brand-orange-primary to-brand-orange-secondary py-2 px-3 rounded-2xl shadow-md text-lg text-white focus:outline-none"
    >
      {text}
    </button>
  )
}

export default StyledButton
