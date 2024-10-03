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
        className={`inline-block px-8 py-2 border border-slate-700 cursor-pointer ${
          todo.completed ? 'line-through text-white' : ''
        }`}
        onClick={handleUpdate}
      >
        {todo.completed ? '✅' : ''} {todo.content}
      </div>
      <button onClick={handleDelete}>🗑️</button>
    </div>
  );
};

export default Todo;
