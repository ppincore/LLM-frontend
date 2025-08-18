import style from './FormLogin.module.scss';
import { Button, Form, Input, Typography } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { rules } from '../../utils/rules';
import React, { useEffect } from 'react';
// import { rules } from '../../utils/rules'

const { Text } = Typography;

const FormLogin = () => {
  const isLoading = false;
  const errorMessage = '';

  const onFinish = (values: { username: string; password: string }) => {
    console.log(values);
  };

  useEffect(() => {
    console.debug('useEffected');
  }, []);

  return (
    <Form size="large" onFinish={onFinish}>
      <Text type="secondary" className={style.description}>
        Only login via email, or +7 phone number login is supported.
      </Text>
      <Form.Item
        name="username"
        rules={[rules.required('Please input your username')]}
      >
        <Input prefix={<UserOutlined />} placeholder="email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[rules.required('Please input your password')]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          placeholder="password"
          autoComplete="current-password"
        />
      </Form.Item>
      <Text type="secondary" className={style.description}>
        By signing up or logging in, you consent to PinCore's Terms of Use and
        Privacy Policy.
      </Text>
      {errorMessage && (
        <Text type="danger" className={style.description}>
          {errorMessage}
        </Text>
      )}

      <Form.Item>
        <Button
          children="Log in"
          type="primary"
          htmlType="submit"
          block
          loading={isLoading}
        />
      </Form.Item>
    </Form>
  );
};

export default FormLogin;
