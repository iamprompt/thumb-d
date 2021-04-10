import { postInterface } from '~@types'

export const postData: postInterface[] = [
  {
    _id: '42354',
    author: {
      name: 'Supakarn Laorattanakul',
      imgUrl: '',
    },
    datePosted: new Date('2021-03-01'),
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa sapien faucibus et molestie ac feugiat sed lectus. Suspendisse potenti nullam ac tortor.',
    imgUrl:
      'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
    comments: [
      {
        _id: '12355',
        author: {
          name: 'Supakarn Laorattanakul',
          imgUrl: '',
        },
        message:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        datePosted: new Date('2021-03-02'),
      },
    ],
  },
]
