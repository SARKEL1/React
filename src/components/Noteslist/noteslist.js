import React, { useState } from 'react'
import Note from '../Note/note'
import { NOTATKI } from './data'
import Modal from '../Modal/modal'
const NotesList = () => {
    const [currentNotes, setCurrentNotes] = useState(NOTATKI)
    const [isModal, setIsModal] = useState(false)
    const [newTitle, setNewTitle] = useState('')
    const [newDescription, setNewDescription] = useState('')
    const deleteNote = (id) => {
        setCurrentNotes(currentNotes.filter((note) => note.id !== id))
    }

    return (
        <div className="bg-cyan-800 p-10 rounded-xl flex flex-col gap-4 w-4/12">
            <h1 className="mb-6 text-center text-5xl font-bold">Notatki</h1>

            <div>
                {currentNotes.map((currentNote) => (
                    <Note
                        key={currentNote.id}
                        title={currentNote.title}
                        description={currentNote.description}
                        deleteNote={() => deleteNote(currentNote.id)}
                    />
                ))}
            </div>
            <Modal active={isModal} setIsModal={setIsModal}>
                <form
                    className="flex flex-col gap-2"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <label htmlFor="title">Title: </label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        value={newTitle}
                        onChange={(event) => setNewTitle(event.target.value)}
                        placeholder="Enter note title"
                        className="p-2 rounded"
                    />

                    <label htmlFor="description">Description:</label>
                    <input
                        id="description"
                        name="description"
                        type="text"
                        value={newDescription}
                        onChange={(event) => setNewDescription(event.target.value)}
                        placeholder="Enter note description"
                        className="p-2 "
                    />


                </form>
            </Modal>
        </div>
    )
}

export default NotesList