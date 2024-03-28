import React from 'react';
import { Layout, Flex } from 'antd';
import AppHeader from './components/Header';
import AppContent from './components/Content';

const { Footer } = Layout;

const App = () => (
  <Flex gap="middle" wrap="wrap">
    <Layout className="layout">
      <AppHeader />
      <AppContent />
      <Footer className="footer" />
    </Layout>
  </Flex>
);

export default App;
