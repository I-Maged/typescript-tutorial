interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<Props> = ({ todo, setTodo }) => {
  return (
    <form className='input'>
      <input
        type='text'
        placeholder='Enter a Task'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className='input__box'
      />
      <button type='submit' className='input__submit'>
        GO
      </button>
    </form>
  );
};

export default InputField;
