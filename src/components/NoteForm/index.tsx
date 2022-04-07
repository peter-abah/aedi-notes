import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Note } from '../../contexts/NotesContext';
import { useCollections } from '../../contexts/CollectionsContext';

import { Input, Textarea, Select } from './formFields';

interface Props {
  note: Note,
  handleSubmit: (values: Note, helpers: FormikHelpers<Note>) => void
}

const NoteForm = ({ note, handleSubmit }: Props) => {
  const navigate = useNavigate();
  let { collections } = useCollections();
  collections = [{ id: '', name: 'None' }, ...collections];
  
  const handleCancel = () => {
    const shouldCancel = prompt('Are you sure? All changes will be lost.');
    if (!shouldCancel) return;
    navigate(-1);
  };

  return (
    <Formik
      initialValues={{...note}}
      validationSchema={Yup.object({
        title: Yup.string().required('Title cannot be empty'),
        body: Yup.string().required('Body cannot be blank'),
        format: Yup.string().matches(/^(txt|md)$/)
      })}
      onSubmit={handleSubmit}
    >
      <Form>
        <Input
          name='title'
          type='text'
          placeholder='Title'
        />
        
        <div className='flex justify-between'>
          <Select label='Collection: ' name='collection_id'>
            {collections.map(({ id, name }) => (
              <option value={id} key={id}>{name}</option>
            ))}
          </Select>

          <Select label='Format: ' name='format'>
            {['txt', 'md'].map((format) => (
              <option value={format} key={format}>{format}</option>
            ))}
          </Select>
        </div>

        <Textarea
          name='body'
          placeholder='Body'
        />
        
        <div className='flex justify-between'>
          <button type='submit'>Save</button>
          <button type='button' onClick={handleCancel}>Cancel</button>
        </div>
      </Form>
    </Formik>
  );
};

export default NoteForm;