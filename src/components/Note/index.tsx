import { Note as NoteType } from '../../contexts/NotesContext';
import Header from './Header';

const Note = ({ note }: { note: NoteType }) => {
  return (
    <section>
      <Header note={note} />
      <article className='whitespace-pre-wrap'>{note.body}</article>
    </section>
  )
};

export default Note;