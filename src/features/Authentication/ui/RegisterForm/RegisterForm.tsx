import { rules } from "@shared/lib/utils/rules";
import { Form, Input, Button, Typography } from "antd";

const { Text } = Typography;

const RegisterForm = () => {
  return (
    <Form>
      <Form.Item name="email" rules={[rules.required("Email is required")]}>
        <Input placeholder="email" />
      </Form.Item>
      <Form.Item name="password" rules={[rules.required("Password is required")]}>
        <Input placeholder="password" />
      </Form.Item>
      <Form.Item rules={[rules.required("Repeat password")]}>
        <Input placeholder="repeat password" />
      </Form.Item>
      <Form.Item>
        <Button type='primary' children={'Sign up'}/>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
