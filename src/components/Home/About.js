import React from 'react'
import { Link } from 'gatsby'

export default function About() {
    return (
        <section className='py-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-10 col-sm-8 mx-auto text-center'>
                        <h2 className='mb-4'>About Us</h2>
                        <p className='lead mb-5'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <Link to="/about">
                            <button className='btn btn-yellow'>
                                Find Out More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
