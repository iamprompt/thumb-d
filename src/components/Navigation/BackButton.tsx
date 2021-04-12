import { MaterialIcons } from '@/components/Icons'
import { useRouter } from 'next/router'

type Props = {
  variant?: 'white' | 'orange' | 'blue'
}

const BackButton = ({ variant = 'orange' }: Props) => {
  const router = useRouter()

  const Gradient = `bg-clip-text text-transparent from-brand-${variant}-primary to-brand-${variant}-secondary bg-gradient-to-r`

  return (
    <div className="absolute z-50 w-6 h-6 inset-3">
      <MaterialIcons
        icon="arrow_back_ios_new"
        onClick={() => router.back()}
        className={`cursor-pointer ${
          variant === 'white' ? 'text-white' : `${Gradient}`
        }`}
      />
    </div>
  )
}

export default BackButton
