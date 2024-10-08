import NewTodoForm from '@/components/NewTodoForm';
import TodoList from '@/components/TodoList';
import db from '@/utils/db';

const getData = async () => {
  // await new Promise((resolve) => setTimeout(() => resolve(), 2000));
  const todos = await db.todo.findMany({
    where: {},
    orderBy: {
      createdAt: 'desc',
    },
  });

  return todos;
};

const Home = async () => {
  const todos = await getData();
  return (
    <div>
      <NewTodoForm />
      <TodoList todos={todos} />
    </div>
  );
};

export default Home;