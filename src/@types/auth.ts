import firebase from 'firebase'

type IAuthContext = {
  user: IUser | null
  loading: boolean
  signInWithEmailAndPassword: (
    { email, password }: EmailAndPassword,
    redirect?: string
  ) => Promise<firebase.auth.UserCredential>
  registerWithEmailAndPassword: (
    { name, email, password }: NameAndEmailAndPassword,
    redirect?: string
  ) => Promise<firebase.auth.UserCredential>
  signinWithGoogle: (redirect?: string) => Promise<firebase.auth.UserCredential>
  signout: () => Promise<void>
}

type EmailAndPassword = { email: string; password: string }
type NameAndEmailAndPassword = { name: string; email: string; password: string }

type IUser = {
  uid: string
  email: string
  name: string
  provider: string
  photoUrl: string
}

export type { IUser, IAuthContext, EmailAndPassword, NameAndEmailAndPassword }
