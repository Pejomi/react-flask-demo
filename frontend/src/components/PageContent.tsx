import { Layout, theme } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;
const { Content } = Layout;

interface PageContentProps {
    title: string;
    content: any;
}

const PageContent: React.FC<PageContentProps> = ({ title, content }) => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (

        <Content
            style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
            }}
        >
            <Title level={1}>{title}</Title>
            {content}
        </Content>

    );
}

export default PageContent;