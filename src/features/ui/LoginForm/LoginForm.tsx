import style from "./LoginForm.module.scss";
import { Button, Form, Input, Typography } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { rules } from "@shared/lib/utils/rules";
import { useAuthByEmail } from "@features/Authentication/api/authenticationApi";
import { useCallback, useEffect, useState } from "react";
import { isFetchError } from "@shared/lib/typeGuards";
import type { TLoginData } from "@store/services/userServices/types";
import { useAppDispatch } from "@shared/lib";
import { userActions } from "@entities/User/model/slice/userSlice";
import { useNavigate } from "react-router-dom";
import { getRouteMain } from "@shared/const/routes";

const { Text } = Typography;

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loginUser, { isLoading }] = useAuthByEmail();
  const [loginError, setLoginError] = useState<string>();

  const onAuth = useCallback(
    async (values: TLoginData) => {
      const result = await loginUser(values);
      if (isFetchError(result)) {
        setLoginError(result.error.data?.message ?? "Server error");
        return;
      }
      if ("data" in result && result.data) {
        const { accessToken: token } = result.data;
        dispatch(userActions.login(token!));
        navigate(getRouteMain())
      }
    },
    [dispatch, loginUser, navigate]
  );

  const onFinish = (value: TLoginData) => {
    onAuth(value);
    console.debug(value);
  };

  const clearErrors = () => {
    setLoginError("");
    console.debug("errors cleared"); // dispatch errors
  };

  useEffect(() => {
    clearErrors();
  }, []);

  return (
    // <Form size="large" onFinish={onFinish}>
    <Form size="large" onFinish={onFinish}>
      <Text type="secondary" className={style.description}>
        Only login via email, or +7 phone number login is supported.
      </Text>
      <Form.Item
        name="email"
        rules={[rules.required("Please input your username")]}
      >
        <Input
          prefix={<UserOutlined />}
          placeholder="email"
          onChange={clearErrors}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[rules.required("Please input your password")]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          placeholder="password"
          autoComplete="current-password"
          onChange={clearErrors}
        />
      </Form.Item>
      <Text type="secondary" className={style.description}>
        By signing up or logging in, you consent to PinCore's Terms of Use and
        Privacy Policy.
      </Text>
      {loginError && (
        <Text type="danger" className={style.description}>
          {loginError}
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

export default LoginForm;
