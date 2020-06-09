import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import Todo from "../Todo"
export default {
  title: 'Todo',
  component: Todo,
};

export const NormalTodo = () => <Todo title="Walk the dog"/>;
