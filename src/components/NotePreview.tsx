import { Link } from 'react-router-dom';
import { Note } from '../contexts/NotesContext';

interface Props {
  note: Note;
  link?: boolean;
}
const NotePreview = ({ note, link }: Props) => {
  const preview = (
    <div className="p-2 rounded border">
      <h2 className="mb-2">{note.title}</h2>
      <p className="text-sm">{note.body.substring(0,100)}</p>
    </div>
  );
  
  if (!link) return preview;
  
  return (
    <Link to={`/notes/${note.id}`}>
      {preview}
    </Link>
  );
};

export default NotePreview;