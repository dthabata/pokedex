import React from 'react';
import { Layout, Flex } from 'antd';
import AppHeader from './components/Header';

const { Footer, Content } = Layout;

const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};

const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
};

const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: 'calc(50% - 8px)',
  maxWidth: 'calc(100% - 0px)',
};

const App = () => (
  <Flex gap="middle" wrap="wrap">
    <Layout style={layoutStyle}>
      <AppHeader />
      <Content style={contentStyle}>Content</Content>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  </Flex>
);

export default App;