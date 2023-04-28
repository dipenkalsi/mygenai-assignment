import React from 'react'
import Modal from './Modal'
const NewModal = ({modalOpen, setModalOpen}) => {
  return (
    <div>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
            <div className='text-fuchsia-200'>Thanks for showing interest in our company ❤️</div>
        </Modal>
    </div>
  )
}

export default NewModal
