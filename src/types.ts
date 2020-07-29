//conformed to the todo in TodoListItemProps
export type Todo = {
    text: string;
    complete: boolean;
};

export type ToggleTodo = (selectedTodo: Todo) => void;