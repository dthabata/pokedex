import React from 'react';
import { Layout, Flex } from 'antd';
import AppHeader from '../../components/Header';
import AppContent from '../../components/Content';

const { Footer } = Layout;

const Home = () => (
    <Flex gap="middle" wrap="wrap">
        <Layout className="layout">
        <AppHeader />
        <AppContent />
        <Footer className="footer" />
        </Layout>
    </Flex>
);

export default Home;
