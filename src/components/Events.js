import React from 'react'
import { format } from 'timeago.js'

const Events = ({ events }) => {
    return <>
        {events?.map((e, index) => (
            <div key={index} className='flex gap-x-4 items-center'>
                <img src={e.actor?.avatar_url} className='w-16 rounded-full' alt='' />
                <h1 className='break-words'>{e?.actor?.login} {e?.type}
                    <br />
                    {e?.repo?.name}
                    <br />
                    <span className='text-sm'>
                        {format(e?.created_at)}
                    </span>
                </h1>
            </div>
        ))}
    </>

}

export default Events