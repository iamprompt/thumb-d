import { useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import { Formik, Form, Field } from 'formik'

import Layout from '@/layouts'

import { MaterialIcons } from '@/components/Icons'

type LoginForm = {
  email: string
  password: string
}

const LoginPage = () => {
  const router = useRouter()
  const initialLoginValues: LoginForm = { email: '', password: '' }
  const [isShowPassword, setShowPassword] = useState(false)

  return (
    <Layout title="Login">
      <div className="flex flex-col max-w-xl mx-auto items-center justify-center min-h-screen p-5">
        <header className="font-bold text-5xl md:text-7xl space-y-3 w-full mb-5">
          <h1>Hello.</h1>
          <h1>Welcome Back</h1>
        </header>
        <Formik
          initialValues={initialLoginValues}
          onSubmit={(values, actions) => {
            console.log({ values, actions })
            actions.setSubmitting(false)
            router.push('/')
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
                    className="text-red-400 hover:text-red-600"
                  />
                </span>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="bg-gradient-to-r from-brand-orange-primary to-brand-orange-secondary w-full py-3 rounded-2xl shadow-md text-lg text-white focus:outline-none"
              >
                Log in
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </Layout>
  )
}

export default LoginPage
