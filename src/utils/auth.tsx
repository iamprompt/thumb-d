import React, { useState, useEffect, useContext, createContext } from 'react'
import Router from 'next/router'
import { _auth, auth } from './firebase'
import firebase from 'firebase/app'
import nookies from 'nookies'

import {
  IUser,
  IAuthContext,
  EmailAndPassword,
  NameAndEmailAndPassword,
} from '~@types/auth'

const authContext = createContext<IAuthContext | null>(null)

export function AuthProvider({ children }: any) {
  const auth = useFirebaseAuth()
  // console.log(auth)

  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => {
  return useContext(authContext)
}

function useFirebaseAuth() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const handleUser = async (rawUser: firebase.User | false) => {
    if (rawUser) {
      const user = await formatUser(rawUser)
      const token = await rawUser.getIdToken()
      setUser(user)
      nookies.set(undefined, 'token', token, { path: '/' })
      setLoading(false)
      return user
    } else {
      setUser(null)
      nookies.set(undefined, 'token', '', { path: '/' })
      setLoading(false)
      return false
    }
  }

  const signInWithEmailAndPassword = async (
    { email, password }: EmailAndPassword,
    redirect: string
  ): Promise<firebase.auth.UserCredential> => {
    setLoading(true)
    const response = await auth.signInWithEmailAndPassword(email, password)
    handleUser(response.user)
    if (redirect) {
      Router.push(redirect)
    }
    return response
  }

  const registerWithEmailAndPassword = async (
    { name, email, password }: NameAndEmailAndPassword,
    redirect = '/'
  ): Promise<firebase.auth.UserCredential> => {
    setLoading(true)
    const response = await auth.createUserWithEmailAndPassword(email, password)
    response.user.updateProfile({
      displayName: name,
    })
    handleUser(response.user)
    if (redirect) {
      Router.push(redirect)
    }
    return response
  }

  const signinWithGoogle = async (
    redirect: string
  ): Promise<firebase.auth.UserCredential> => {
    setLoading(true)
    const response = await auth.signInWithPopup(new _auth.GoogleAuthProvider())
    handleUser(response.user)
    if (redirect) {
      Router.push(redirect)
    }
    return response
  }

  const signout = async (): Promise<void> => {
    await auth.signOut()
    await handleUser(false)
    return
  }

  useEffect(() => {
    const unsubscribe = auth.onIdTokenChanged(handleUser)
    return () => unsubscribe()
  }, [])

  useEffect(() => {
    const handle = setInterval(async () => {
      const user = auth.currentUser
      if (user) await user.getIdToken(true)
    }, 10 * 60 * 1000)

    // clean up setInterval
    return () => clearInterval(handle)
  }, [])

  return {
    user,
    loading,
    signInWithEmailAndPassword,
    registerWithEmailAndPassword,
    signinWithGoogle,
    signout,
  }
}

const formatUser = async (
  user: firebase.User | false
): Promise<IUser | Record<string, never>> => {
  if (user === false) return null
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
  }
}
