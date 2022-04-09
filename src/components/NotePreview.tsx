import { Link } from 'react-router-dom';
import { Note } from '../contexts/NotesContext';

interface Props {
  note: Note;
  link?: boolean;
}
const NotePreview = ({ note, link }: Props) => {
  let noteBody;
  if (note.body.length < 300) {
    noteBody = note.body;
  } else {
    noteBody = note.body.substring(0, 300) + '...';
  }

  const preview = (
    <div className="p-2 rounded border">
      <h2 className="mb-2">{note.title}</h2>
      <p className="text-sm whitespace-pre-wrap">{noteBody}</p>
    </div>
  );
  
  if (!link) return preview;
  
  return (
    <Link className='block' to={`/notes/${note.id}`}>
      {preview}
    </Link>
  );
};

export default NotePreview;