import React, { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'

function Message({msg,type}) {
    useEffect(() => {
        toast?.[type](msg, {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }, [])

    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
           />
           
        </div>
    )
}

export default Message
