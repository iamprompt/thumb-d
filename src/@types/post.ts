type author = {
  name: string
  imgUrl: string
}

type basePostInterface = {
  _id: string
  author: author
  message: string
  datePosted: Date
}

type commentInterface = basePostInterface
type postInterface = basePostInterface & {
  imgUrl?: string
  comments: commentInterface[]
}

export type { author, basePostInterface, commentInterface, postInterface }
