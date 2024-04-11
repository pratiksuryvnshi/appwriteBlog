import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'
import { useSelector } from 'react-redux'

function MyPosts() {

    const [posts, setPosts] = useState([])
    const userData = useSelector((state) => state.auth.userData)

    useEffect(() => {
        appwriteService.getPostsByUser(userData?.$id).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])


    console.log(userData);




    if (posts.length === 0) {
        return (
            <div className='w-full py-8 mt-4 text-center'>
                <Container>
                    <div className='flex flex-wrap'>
                        <div className='w-full p-2'>
                            <h1 className='text-2xl font-bold hover:text-gray-500'>All the posts you create will be available here.</h1>
                            <p>If your posts are not here just reload.</p>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    <div className='w-full p-2'>
                        <h1 className='text-2xl font-bold pb-4'>My Posts</h1>
                    </div>
                </div>
            </Container>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 md:w-1/4 w-1/2'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default MyPosts