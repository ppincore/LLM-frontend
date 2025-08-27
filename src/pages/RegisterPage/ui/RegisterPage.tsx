import { Layout, Row, Card } from "antd";
import { RegisterForm } from "@features/Authentication";

const RegisterPage = () => {
  return (
    <Layout>
      <Row justify="center" align="middle" className="h100">
        <Card>
          <RegisterForm/>
        </Card>
      </Row>
    </Layout>
  );
};

export default RegisterPage;
