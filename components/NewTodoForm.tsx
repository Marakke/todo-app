import { newTodo } from '@/utils/actions';

const NewTodoForm = () => {
  return (
    <div className="mb-2">
      <form action={newTodo}>
        <input type="text" name="todo" className="border border-black" placeholder="New Todo" />
        <button type="submit" className="ml-2.5 p-2 border --foreground rounded-md primary-button">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default NewTodoForm;
