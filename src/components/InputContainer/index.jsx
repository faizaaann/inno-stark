const InputContainer = ({
  labelValue = 'Hello World',
  htmlFor = '',
  inputType = 'text',
  placeholder = 'Sample Input',
  value = '',
  onBlur = () => {},
  onChange = () => {},
  error,
  touched,
}) => {
  return (
    <div className='mb-3 w-full'>
      <label
        htmlFor={htmlFor}
        className='form-label inline-block mb-2 text-gray-700 text-sm'
      >
        {labelValue}
      </label>
      <input
        type={inputType}
        className='
          form-control
          block
          w-full
          px-2
          py-1
          text-sm
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        '
        id={htmlFor}
        name={htmlFor}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />

      {error && touched && <p className='text-red-600 font-normal '>{error}</p>}
    </div>
  );
};

export default InputContainer;
