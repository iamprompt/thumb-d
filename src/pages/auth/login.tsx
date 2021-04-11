import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Formik, Form, Field } from 'formik'

import tw from 'twin.macro'

import Layout from '@/layouts'

import { useAuth } from '@/utils/auth'

import { MaterialIcons } from '@/components/Icons'

const Header = tw.div`font-bold text-5xl md:text-7xl space-y-3 w-full mb-5`
const FormContainer = tw.div`flex flex-col max-w-xl mx-auto items-center justify-center min-h-screen p-5`

type LoginForm = {
  email: string
  password: string
}

const LoginPage = () => {
  const router = useRouter()
  const initialLoginValues: LoginForm = { email: '', password: '' }
  const { user, loading, signInWithEmailAndPassword } = useAuth()

  const [isShowPassword, setShowPassword] = useState(false)
  const [callbackUrl, setCallbackUrl] = useState<string | null>(null)

  if (user && !loading) {
    router.push(`${callbackUrl || '/'}`)
  }

  const handleLogin = ({ email, password }: LoginForm) => {
    console.log('Handle')
    signInWithEmailAndPassword({ email, password }, callbackUrl)
  }

  useEffect(() => {
    setCallbackUrl(router.query.callbackUrl as string)
  }, [router])

  useEffect(() => {
    console.log('Init')
    // console.log(user)
    // console.log(loading)
  }, [user])

  return (
    <Layout title="Login">
      <FormContainer>
        <Header>
          <h1>Hello.</h1>
          <h1>Welcome Back</h1>
        </Header>
        <Formik
          initialValues={initialLoginValues}
          onSubmit={(values, actions) => {
            console.log({ values, actions })
            handleLogin(values)
            actions.setSubmitting(false)
          }}
        >
          <Form className="space-y-8 w-full">
            <div>
              <label htmlFor="email">Email address</label>
              <Field
                type="email"
                name="email"
                id="email"
                title="Please enter a valid email address"
                required
                className="mt-2 appearance-none py-3 px-3 w-full rounded-2xl border-none bg-white focus:bg-white shadow-md focus:shadow-lg focus:ring focus:ring-red-400"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <div className="relative mt-2">
                <Field
                  type={isShowPassword ? 'text' : 'password'}
                  name="password"
                  id="password"
                  required
                  className="appearance-none py-3 px-3 w-full rounded-2xl border-none bg-white focus:bg-white shadow-md focus:shadow-lg focus:ring focus:ring-red-400"
                />
                <span
                  id="passwordVisText"
                  className="absolute inset-y-0 right-4 flex items-center cursor-pointer"
                  onClick={() => setShowPassword(!isShowPassword)}
                >
                  <MaterialIcons
                    icon={isShowPassword ? 'visibility' : 'visibility_off'}
                    className="bg-clip-text text-transparent hover:from-brand-orange-primary hover:to-brand-orange-secondary from-brand-blue-primary to-brand-blue-secondary bg-gradient-to-r"
                  />
                </span>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="bg-gradient-to-r from-brand-orange-primary to-brand-orange-secondary w-full py-3 rounded-2xl shadow-md text-lg text-white focus:outline-none"
              >
                Login
              </button>
            </div>
            <div className="text-center">
              Do not have an account?? Let&apos;s{' '}
              <span
                className="font-bold cursor-pointer hover:bg-clip-text hover:text-transparent hover:from-brand-orange-primary hover:to-brand-orange-secondary hover:bg-gradient-to-r"
                onClick={() => router.push('/auth/register')}
              >
                Register
              </span>
            </div>
          </Form>
        </Formik>
      </FormContainer>
    </Layout>
  )
}

export default LoginPage
