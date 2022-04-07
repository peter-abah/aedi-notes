import { Note } from '../contexts/NotesContext';
import NotePreview from './NotePreview'

const Notes = ({ notes }: { notes: Note[] }) => {
  return (
    <div className="flex flex-col gap-2">
      {notes.map((note) => (
        <NotePreview key={note.id} note={note} link />
      ))}
    </div>
  )
};

export default Notes;