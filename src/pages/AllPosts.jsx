import React, { useState, useEffect } from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'
import { Query } from 'appwrite'

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        appwriteService.getPosts(
            [Query.orderDesc('$updatedAt')]
        ).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    // console.log(posts);

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    <div className='w-full p-2'>
                        <h1 className='text-2xl font-bold pb-4 '>All Posts</h1>
                    </div>
                </div>
            </Container>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts