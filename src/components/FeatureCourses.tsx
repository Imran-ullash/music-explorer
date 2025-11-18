import Link from 'next/link';
import React from 'react';
import courseData from '../data/music_course.json'

interface TCourse{
            id: number,
            title: string,
            slug: string,
            description: string,
            price: 99.99,
            instructor: string,
            isFeatured: boolean,
}

const FeatureCourses = () => {
    const featureCourses = courseData.courses.filter((course:TCourse)=> course.isFeatured)

    return (
        <div className='py-12 bg-gray-900'>
            <div className='text-center'>
                <h1 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>Feautred Courses</h1>
                <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Learn With the Best</p>
            </div>
            <div className='mt-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center '>
                    {featureCourses.map(course=>(
                        <div key={course.id} className='flex justify-center'>
                            <p>hello</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='mt-20 text-center'>
                <Link href={'/courses'}
                className='px-4 py-2 rounded border border-neutral-600 bg-white hover:bg-gray-100 transition duration-200 text-neutral-700'
                >
                    View all courses
                </Link>
            </div>
        </div>
    );
};

export default FeatureCourses;