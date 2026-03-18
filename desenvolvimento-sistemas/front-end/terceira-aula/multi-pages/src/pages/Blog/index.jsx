import React, { useEffect, useState } from 'react'

export const Blog = () => {
    const [posts, setPosts] = useState([])



    useEffect(() => {

        fetch("http://localhost:3000/posts").then(res => res.json().then(res => setPosts(res)))

    }, [])

    return (
        <>
            <div className='flex gap-2' >
                {
                    posts.map(post => (
                        <div key={post.id} className='card'>
                            <img src={post.image} alt={post.title} />
                            <h2>{post.title}</h2>
                            <h3>{post.views}</h3>
                            <p>{post.description}</p>
                        </div>
                    ))
                }

            </div>


        </>
    )
}
