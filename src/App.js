import React from 'react';
import { Layout, Typography } from 'antd';
import AddTodo from './components/AddTodo';
import TodoList from './features/todos/TodoList';

const { Content, Footer } = Layout;
const { Title } = Typography;

const App = () => {
  return (
    <Layout style={{ minHeight: '100vh', background: '#f0f2f5' }}>
      <Content
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '40px',
          textAlign: 'center',
        }}
      >
        <Title style={{ marginBottom: '40px', fontSize: '36px', color: '#1890ff' }}>
          📝 ToDo List
        </Title>
        <div style={{ width: '100%', maxWidth: '600px' }}>
          <AddTodo />
          <TodoList />
        </div>
      </Content>

      <Footer style={{ textAlign: 'center' }}>© 2025 Harini R</Footer>
    </Layout>
  );
};

export default App;
