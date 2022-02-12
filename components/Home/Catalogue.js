import React from 'react'
import ContentLoader from 'react-content-loader'

const Catalogue = () => {
    return (
        <>
            <div className='flex items-center gap-8'>
                <p className='hover:underline cursor-pointer'>All Catgories</p>
            </div>

            <hr className='my-4' />

            <div className='p-4 flex flex-wrap justify-center items-center gap-6 my-10'>
                <ContentLoader height={280}>
                    <rect x="3" y="3" rx="10" ry="10" width="300" height="180" />
                    <rect x="6" y="190" rx="0" ry="0" width="292" height="20" />
                    <rect x="4" y="215" rx="0" ry="0" width="239" height="20" />
                    <rect x="4" y="242" rx="0" ry="0" width="274" height="20" />
                </ContentLoader>
                <ContentLoader height={280}>
                    <rect x="3" y="3" rx="10" ry="10" width="300" height="180" />
                    <rect x="6" y="190" rx="0" ry="0" width="292" height="20" />
                    <rect x="4" y="215" rx="0" ry="0" width="239" height="20" />
                    <rect x="4" y="242" rx="0" ry="0" width="274" height="20" />
                </ContentLoader>
            </div>
        </>
    )
}

export default Catalogue