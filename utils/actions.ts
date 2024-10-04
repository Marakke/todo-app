'use server';
import db from '@/utils/db';
import { revalidatePath } from 'next/cache';

export const newTodo = async (data: FormData) => {
  const newTodo = data.get('todo') as string;

  if (newTodo) {
    await db.todo.create({
      data: {
        content: newTodo,
      },
    });
    revalidatePath('/');
  };
};

export const completeTodo = async (id: string) => {
  await db.todo.update({
    where: { id },
    data: {
      completed: true,
    },
  });
  revalidatePath('/');
};

export const uncompleteTodo = async (id: string) => {
  await db.todo.update({
    where: { id },
    data: {
      completed: false,
    },
  });
  revalidatePath('/');
};

export const deleteTodo = async (id: string) => {
  await db.todo.delete({
    where: { id },
  });
  revalidatePath('/');
};
