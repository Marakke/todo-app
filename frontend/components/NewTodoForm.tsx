import { newTodo } from '@/utils/actions';

const NewTodoForm = () => {
  return (
    <div>
      <form action={newTodo}>
        <input type="text" name="todo" className="border border-black" placeholder="New Todo" />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default NewTodoForm;
