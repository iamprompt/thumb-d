import Layout from '@/layouts'

const ProfilePage = () => {
  return (
    <Layout nav>
      <div className="aspect-w-16 aspect-h-5 z-0">
        <img
          src="https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt=""
          className="object-cover"
        />
      </div>

      <div className="relative flex items-center justify-center z-10">
        <div className="absolute rounded-full -t-16">
          <img
            src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt=""
            className="w-32 h-32 object-cover rounded-full"
          />
        </div>
      </div>

      <div className="mt-20 px-5 text-center">
        <div className="font-bold text-4xl">Jane Doe</div>
        <div className="font-light text-xs text-gray-400 mt-2">
          Last online 10 minutes ago
        </div>
        <div className="font-light text-sm text-gray-700 mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </div>
      </div>

      <div className="flex items-center justify-center mt-6 px-5">
        <div className="bg-red-500 px-20 py-3 font-bold text-white rounded-full">
          Follow
        </div>
      </div>

      <div className="mt-7 mx-5 border border-red-600 max-w-screen-md md:mx-auto"></div>
      <div></div>
    </Layout>
  )
}

export default ProfilePage
