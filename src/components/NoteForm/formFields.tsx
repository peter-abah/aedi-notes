import { useField } from 'formik';

export const Input = ({ ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <input {...field} {...props} />
      {meta.touched && meta.error ?
        <p>{meta.error}</p> :
        null
      }
    </div>
  )
};

export const Textarea = ({...props}: any) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <textarea className='w-full' {...field} {...props} />
      {meta.touched && meta.error ?
        <p>{meta.error}</p> :
        null
      }
    </div>
  )
};

export const Select = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label>
        {label}
        <select {...field} {...props} />
      </label>
      {meta.touched && meta.error ?
        <p>{meta.error}</p> :
        null
      }
    </div>
  );
};