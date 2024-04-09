import React from 'react'
import { Container } from '../components'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import postBlog from '/postBlog.svg'

function Home() {

    // console.log(userData);
    const authStatus = useSelector((state) => state.auth.status)





    if (authStatus) {
        return (
            <div className='w-full py-8'>
                <Container>
                    <div className='flex flex-wrap'>
                        <div className='w-full p-2'>
                            <h1 className='text-2xl font-bold ' >Welcome to my website, Do add a post!! </h1>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div className='w-full content-center '>
                        <img className='max-h-96 mx-auto max-w-full' src={postBlog} alt="" />
                    </div>
                </Container>

            </div>
        )
    }

    return (
        <div className='w-full py-8 mt-4 text-center'>
            <Container>
                <div className='flex flex-wrap'>
                    <div className='w-full p-2'>
                        <Link to='/login'><h1 className='text-2xl font-bold hover:text-gray-500'>Login to read and create posts.</h1></Link>
                    </div>
                </div>
            </Container>
        </div>
    )


}

export default Home