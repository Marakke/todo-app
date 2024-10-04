'use client';
import { useTransition } from 'react';
import { completeTodo, uncompleteTodo, deleteTodo } from '@/utils/actions';

const Todo = ({ todo }) => {
  const [isPending, startTransition] = useTransition();

  const handleUpdate = () => {
    startTransition(() => {
      if (todo.completed) {
        uncompleteTodo(todo.id);
      } else {
        completeTodo(todo.id);
      }
    });
  };

  const handleDelete = () => {
    startTransition(() => {
      deleteTodo(todo.id);
    });
  };

  return (
    <div>
      <div
        className={`inline-block px-4 py-2 border border-slate-700 cursor-pointer todo ${
          todo.completed ? 'line-through text-white' : ''
        }`}
        onClick={handleUpdate}
      >
        {todo.content}
      </div>
      <button className="ml-2.5" onClick={handleUpdate}>{todo.completed ? '❎' : '✅'}</button>
      <button className="ml-2.5" onClick={handleDelete}>❌</button>
    </div>
  );
};

export default Todo;
