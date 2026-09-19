'use client'

export const CodeRunner = ({ url }) => {
    return(
        <iframe src={url} width="100%" height="356" className='x:mt-5' allowFullScreen></iframe>
    )
}