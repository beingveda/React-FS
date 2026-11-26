import React from 'react'

function Cards({username, btnText}) {
    console.log(username);
  return (
    <div className="w-full min-h-screen grid place-items-center">
  <div className="w-80 bg-zinc-900 rounded-xl p-4 text-white">
      <img
        className="w-full h-48 object-cover rounded-lg"
        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
        alt="Product"
      />

      <h2 className="text-xl font-bold mt-3">{username}</h2>

      <p className="text-zinc-400 mt-2">
        Comfortable sneakers for everyday use.
      </p>

      <h3 className="text-xl font-semibold mt-3">₹2,499</h3>

      <button className="w-full bg-blue-600 hover:bg-blue-700 rounded-lg py-2 mt-4 cursor-pointer">
        {btnText}
      </button>
    </div>
</div>
  )
}

export default Cards
