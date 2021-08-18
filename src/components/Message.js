import React, { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'

function Message({msg,type}) {
    useEffect(() => {
        console.log(msg);
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
            >
            </ToastContainer>
        </div>
    )
}

export default Message
