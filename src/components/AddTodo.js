import { Input, Button, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todos/TodoSlice';
import { useState } from 'react';

const AddTodo = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const submit = () => {
    if (value.trim()) {
      dispatch(addTodo(value));
      setValue('');
    }
  };

  return (
    <Space.Compact style={{ width: '100%', marginBottom: '20px' }}>
      <Input
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Add a new task"
        onPressEnter={submit}
      />
      <Button type="primary" icon={<PlusOutlined />} onClick={submit}>
        Add
      </Button>
    </Space.Compact>
  );
};

export default AddTodo;
