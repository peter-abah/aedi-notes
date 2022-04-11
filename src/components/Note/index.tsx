import { Note as NoteType } from '../../contexts/NotesContext';
import Header from './Header';
import Markdown from '../Markdown';

const Note = ({ note }: { note: NoteType }) => {
  return (
    <section>
      <Header note={note} />
      {note.format === 'md' ?
        <Markdown>{note.body}</Markdown> :
        <article className='whitespace-pre-wrap'>{note.body}</article>
      }
    </section>
  )
};

export default Note;