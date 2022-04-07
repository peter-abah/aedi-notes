import { Note as NoteType } from '../contexts/NotesContext';

const Note = ({ note }: { note: NoteType }) => {
  return (
    <div>
      <h2 className="pb-3 text-xl font-bold">{note.title}</h2>
      <article>{note.body}</article>
    </div>
  )
};

export default Note;