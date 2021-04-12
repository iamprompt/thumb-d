import { postInterface } from '~@types'

export const postData: postInterface[] = [
  {
    _id: '42354',
    author: {
      name: 'Phoom Jaijung',
      imgUrl:
        'https://firebasestorage.googleapis.com/v0/b/thumb-d.appspot.com/o/images%2Fprofile%2Fphoto-1528956357149-92a27fd6349e.jfif?alt=media',
    },
    datePosted: new Date('2021-03-01'),
    message:
      'Our life is shaped by our mind; we become what we think. Suffering follows an evil thought as the wheels of a cart follow the oxen that draw it. Our life is shaped by our mind; we become what we think. Joy follow a pure thought like a shadow that never leaves.',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/thumb-d.appspot.com/o/images%2Fprofile%2Fpexels-photo-220578.jpeg?alt=media',
    comments: [
      {
        _id: '12355',
        author: {
          name: 'Ajarn Kom',
          imgUrl:
            'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        },
        message: 'A disciplined mind brings happiness 🙏',
        datePosted: new Date('2021-03-02'),
      },
    ],
  },
  {
    _id: '42354',
    author: {
      name: 'Aum Muangthip',
      imgUrl:
        'https://firebasestorage.googleapis.com/v0/b/thumb-d.appspot.com/o/images%2Fprofile%2Fphoto-1534751516642-a1af1ef26a56.jfif?alt=media',
    },
    datePosted: new Date('2021-03-01'),
    message:
      'Hatred is never appeased by hatred in this world. By non-hatred alone is hatred appeased. This is a law eternal.',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/thumb-d.appspot.com/o/images%2Fprofile%2Fpexels-photo-4576304.jpeg?alt=media',
    comments: [],
  },
]
