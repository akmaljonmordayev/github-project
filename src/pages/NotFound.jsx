import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function NotFound() {
  const [count, setCount] = useState(5)
  const navigate = useNavigate()

  useEffect(() => {
    if (count === 0) {
      navigate('/')
      return
    }

    const timer = setTimeout(() => {
      setCount((prev) => prev - 1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [count, navigate])

  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="text-center">

        {/* 404 */}
        <h1 className="text-9xl font-black text-gray-200">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold text-gray-900">
          Sahifa topilmadi 😕
        </h2>

        <p className="mx-auto mt-3 max-w-md text-gray-500">
          Siz kiritgan sahifa mavjud emas yoki o‘chirilgan.
        </p>

        {/* Timer */}
        <div className="mt-8">
          <p className="text-gray-500">
            Bosh sahifaga avtomatik qaytiladi:
          </p>

          <div className="mx-auto mt-3 flex h-20 w-20 items-center justify-center border-4 border-black text-4xl font-black">
            {count}
          </div>
        </div>

        {/* Button */}
        <Link
          to="/"
          className="mt-8 inline-block bg-black px-7 py-3 font-semibold text-white transition hover:bg-gray-800"
        >
          Bosh sahifaga qaytish
        </Link>

      </div>
    </div>
  )
}

export default NotFound