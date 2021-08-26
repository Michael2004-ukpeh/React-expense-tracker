import React from 'react'
import { createPortal } from 'react-dom'

const modalRoot = document.getElementById('modal-root')
const Modal = ({children}) => {
  
    return (
      createPortal(<div>{children}</div>, modalRoot)
    )
}

export default Modal
