import { Layout, Row, Card } from 'antd';
import FormLogin from '../../components/FormLogin/FormLogin';
const LoginPage = () => {
  return (
    <Layout>
      <Row justify="center" align="middle" className="h100">
        <Card>
          <FormLogin />
        </Card>
      </Row>
    </Layout>
  );
};

export default LoginPage;
