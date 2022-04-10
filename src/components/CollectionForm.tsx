import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { Collection } from '../contexts/CollectionsContext';

interface Props {
  collection: Collection,
  handleSubmit: (values: Collection, helpers: FormikHelpers<Collection>) => void;
  handleCancel: () => void;
}

const CollectionForm = ({ collection, handleSubmit, handleCancel }: Props) => {
  return (
    <div className='grid place-items-center fixed top-0 left-0 w-screen h-screen bg-secondary/50'>
      <Formik
        initialValues={{...collection}}
        validationSchema={Yup.object({
          name: Yup.string().required('Name cannot be blank.'),
        })}
        onSubmit={handleSubmit}
      >
        <Form className='w-80 max-w-[90%] p-4 rounded-md'>
          <h2 className='mb-3 text-lg'>Collection</h2>
  
          <div className='mb-3'>
            <label htmlFor='name'>Name:</label>
            <Field id='name' name='name' type='text' className='border p-1 w-full' />
            <ErrorMessage name='name' className='text-sm pt-2' />
          </div>

          <div className='flex justify-between mb-4'>
            <button type='submit'>Save</button>
            <button type='button' onClick={handleCancel}>Cancel</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default CollectionForm;