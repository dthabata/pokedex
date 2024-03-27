import React from 'react';
import { Layout, Flex } from 'antd';
import AppHeader from './components/Header';
import AppContent from './components/Content';

const { Footer } = Layout;

const footerStyle = {
  backgroundColor: '#fff',
  marginTop: '68px',
};

const layoutStyle = {
  backgroundColor: '#fff',
  overflow: 'hidden',
  width: 'calc(50% - 8px)',
  maxWidth: 'calc(100% - 0px)',
};

const App = () => (
  <Flex gap="middle" wrap="wrap">
    <Layout style={layoutStyle}>
      <AppHeader />
      <AppContent />
      <Footer style={footerStyle} />
    </Layout>
  </Flex>
);

export default App;