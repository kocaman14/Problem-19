import { useEffect, useState,useRef  } from 'react'

// isOpen true olduğunda Modalı açalım
export default function App() {
  const [isOpen, setOpen] = useState(false)

  function openModal() {
    setOpen(true)
  }

  function closeModal() {
    setOpen(false)
  }
console.log(isOpen)
  return (
    <>
    {!isOpen?
      <button onClick={openModal}>Modalı aç</button>
      :<Modal isOpen={isOpen} >
        <h1 className='pb-2 text-lg font-bold'>Modal açık</h1>
        <button onClick={closeModal}>Kapalı</button>
      </Modal>
      }
    </>
  )
}

function Modal({ isOpen,children }) {
  const modalRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      modalRef.current.showModal()
    } else {
      modalRef.current.close()
    }
  }, [isOpen])

  return (
    <dialog ref={modalRef} className='border-2 border-black p-4'>
      {children}
    </dialog>
  )
}