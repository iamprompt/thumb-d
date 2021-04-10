import { BaseSyntheticEvent, Dispatch, SetStateAction } from 'react'
import { Field, Form, Formik } from 'formik'

import { MaterialIcons } from '@/components/Icons'

type Props = {
  v: any
  setV: Dispatch<SetStateAction<any>>
  placeHolder: string
}

const SearchBox = ({ v, setV, placeHolder }: Props) => (
  <Formik
    initialValues={{ val: '' }}
    onSubmit={(values, actions) => {
      console.log({ values, actions })
      setV(values.val)
      // alert(JSON.stringify(values, null, 2))
      actions.setSubmitting(false)
    }}
  >
    <Form className="flex items-center relative">
      <div className="relative w-full">
        <Field
          type="text"
          name="val"
          id="val"
          placeholder={placeHolder}
          required
          onChange={(e: BaseSyntheticEvent) => setV(e.target.value)}
          value={v}
          className="appearance-none py-3 px-3 pr-10 w-full rounded-2xl border-none bg-white focus:bg-white shadow-md focus:shadow-lg focus:ring focus:ring-red-400"
        />
        <button type="submit" className="absolute pt-3 text-lg focus:outline-none right-2">
          <MaterialIcons
            icon="search"
            className="bg-clip-text text-transparent from-brand-orange-primary to-brand-orange-secondary bg-gradient-to-r"
          />
        </button>
      </div>
    </Form>
  </Formik>
)

export default SearchBox
