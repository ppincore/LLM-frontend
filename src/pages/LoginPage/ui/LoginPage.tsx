import { Layout, Row, Card } from 'antd';
import { LoginForm } from '@features/Authentication';

const LoginPage = () => {
  return (
    <Layout>
      <Row justify="center" align="middle" className="h100">
        <Card>
          <LoginForm />
        </Card>
      </Row>
    </Layout>
  );
};

export default LoginPage;
