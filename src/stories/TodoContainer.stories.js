import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import TodoContainer from "../TodoContainer";
export default {
  title: 'TodoContainer',
  component: TodoContainer,
};

export const NormalTodoContainer = () => 
<TodoContainer todos={["Do Assignments", "PWJ Homework", "Eat pizza", "Workout"]} />;
