'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

function Blogs () {
  // Guarda los datos de los blogs en el estado
  const [blogs, setBlogs] = useState([])

  // Usa useEffect para realizar la solicitud GET cuando el componente se monta
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://devink-cms.onrender.com/api/blogs?populate=cover')
        const jsonData = await response.json()
        const data = jsonData.data
        console.log(data)

        setBlogs(data)
      } catch (error) {
        console.error('Hubo un problema al obtener los datos:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className='flex justify-center'>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1300px]'>
      {blogs.map((blog) => (
        <div key={blog.id} className='relative group'>
          <div className='m-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-[1.01]'>
            <div className='relative h-60 w-full'>
              <Image
                src={blog.attributes.cover.data.attributes.formats.small.url}
                alt="Descripción de la imagen"
                layout="fill"
                objectFit="cover"
                className='rounded-t-lg'
              />
            </div>
            <h3 className='mt-4 text-lg leading-tight font-semibold text-gray-900'>{blog.attributes.title}</h3>
            <p className='text-sm text-gray-700 mt-2'>{blog.attributes.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>

  )
}

export default Blogs
