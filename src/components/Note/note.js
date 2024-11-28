import React, { useState } from 'react'
import Modal from '../Modal/modal'

const Note = ({ title, description, deleteNote }) => {
    const [isModal, setIsModal] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false)
    const [currentTitle, setCurrentTitle] = useState(title)
    const [currentDescription, setCurrentDescription] = useState(description)
    const toggleContent = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <div className="m-4 rounded-lg bg-white p-4">
            <div className="flex items-center justify-between">
                <button onClick={toggleContent} className="flex-grow text-left">
                    <h2 className="text-2xl font-semibold ">
                        {currentTitle}
                    </h2>
                </button>

                <div className="flex gap-3">
                    <button
                        type="button"

                        className="bg-blue-500 px-4 py-2 text-white0"
                        onClick={() => setIsModal(true)}
                    >Edytuj

                    </button>
                    <button
                        type="button"
                        className="bg-red-700 px-4 py-2 text-white"
                        onClick={deleteNote}
                    >Usuń
                    </button>
                </div>
            </div>

            {isExpanded && (
                <p>{currentDescription}</p>
            )}
            <Modal active={isModal} setIsModal={setIsModal}>
                <h2>Edit Note</h2>
                <form className="flex flex-col gap-2">
                    <label htmlFor="title">Title: </label>
                    <input
                        id="title"
                        name="title"
                        type={'text'}
                        className="p-2 rounded"
                        value={currentTitle}
                        onChange={(event) => setCurrentTitle(event.target.value)}
                    />
                    <label htmlFor="description">Description</label>
                    <input
                        id="description"
                        name="description"
                        type={'text'}
                        className="p-2 rounded "
                        value={currentDescription}
                        onChange={(event) => setCurrentDescription(event.target.value)}
                    />
                    <button
                        type={'button'}
                        className="py-2 px-4 bg-white rounded "
                        onClick={() => setIsModal(false)}
                    >
                        Submit
                    </button>
                </form>
            </Modal>
        </div>
    )
}

export default Note