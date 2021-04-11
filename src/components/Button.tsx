import Link from 'next/link'

type Props = {
  text: string
  tw: string
  href: string
}

const Button = ({ text, tw, href }: Props) => (
  <Link href={href}>
    <div
      className={
        'font-bold text-white rounded-full cursor-pointer bg-gradient-to-r bg-blue-brand-gradient' +
        ' ' +
        tw
      }
    >
      {text}
    </div>
  </Link>
)

export default Button
