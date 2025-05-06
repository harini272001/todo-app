import { List, Button, Tag, Empty } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from './TodoSlice';
import { CheckOutlined, DeleteOutlined } from '@ant-design/icons';

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return todos.length ? (
    <List
      bordered
      dataSource={todos}
      renderItem={todo => (
        <List.Item
          actions={[
            <Button
              icon={<CheckOutlined />}
              type={todo.completed ? "default" : "dashed"}
              onClick={() => dispatch(toggleTodo(todo.id))}
            >
              {todo.completed ? 'Undo' : 'Done'}
            </Button>,
            <Button
              icon={<DeleteOutlined />}
              danger
              onClick={() => dispatch(deleteTodo(todo.id))}
            >
              Delete
            </Button>,
          ]}
        >
          <div>
            {todo.text}{' '}
            {todo.completed && <Tag color="green">Completed</Tag>}
          </div>
        </List.Item>
      )}
    />
  ) : (
    <Empty description="No tasks added yet" />
  );
};

export default TodoList;
