import { useField } from 'formik';

export const Input = ({ className, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <div className={className}>
      <input className='text-inherit bg-inherit' {...field} {...props} />
      {meta.touched && meta.error ?
        <p className='text-xs'>{meta.error}</p> :
        null
      }
    </div>
  )
};

export const Textarea = ({ className, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <div className={className}>
      <textarea className='text-inherit bg-inherit w-full grow' {...field} {...props} />
      {meta.touched && meta.error ?
        <p className='text-xs'>{meta.error}</p> :
        null
      }
    </div>
  )
};

export const Select = ({ label, className, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <div className={className}>
      <label>
        {label}
        <select {...field} {...props} />
      </label>
      {meta.touched && meta.error ?
        <p className='text-xs'>{meta.error}</p> :
        null
      }
    </div>
  );
};