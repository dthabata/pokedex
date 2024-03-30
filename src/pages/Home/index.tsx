import React from 'react';
import { Layout, Flex } from 'antd';
import AppHeader from '../../components/Header';
// TODO: Content to TS
// @ts-ignore
import AppContent from '../../components/Content';

const { Footer } = Layout;

const Home: React.FC = () => (
    <Flex gap="middle" wrap="wrap">
        <Layout className="layout">
        <AppHeader />
        <AppContent />
        <Footer className="footer" />
        </Layout>
    </Flex>
);

export default Home;
