import { Form, Input, Button } from "antd";
import React, { useState, useEffect } from "react";
import { useMutation } from "react-query";

// import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  InfoCircleTwoTone,
  GoogleSquareFilled,
} from "@ant-design/icons";

// import { GOOGLE_API } from "./../../commons";
import authBuilder from "shared/auth";
import Block from "shared/ui/Block";
// import registerService from "./../../services/registerService";
// import loginService from "./../../services/loginService";
// import requestBuilder from "./../../utils/requestBuilder";
// import { SetIsAuth } from "./../../redux/user/slice";

const RegisterForm = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [success, setSuccess] = useState(true); //  success registration

  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});

  const [getResult, setPostResult] = useState(null);

  const formatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  };

  const { isLoading: isLoadingLogin, mutate: postRegister } = useMutation(
    "query-registration",
    async () => {
      return await authBuilder.register(
        name,
        surname,
        email,
        password,
        confirm
      );
    },
    {
      enabled: false,
      onSuccess: (res) => {
        const result = {
          status: res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data,
        };
        // dispatch(SetIsAuth(true));
        setPostResult(formatResponse(result));
        navigate("/");
      },
      onError: (err) => {
        setPostResult(formatResponse(err.response?.data || err));
      },
    }
  );

  useEffect(() => {
    if (isLoadingLogin) setPostResult("loading...");
  }, [isLoadingLogin]);

  function register(data) {
    try {
      postRegister(data);
    } catch (err) {
      setPostResult(formatResponse(err));
    }
  }
  // async function register(registerData, setSuccess) {
  //   let res = await registerService.Register(registerData);
  //   if (res.status === 201) {
  //     setSuccess(false);
  //     let loginData = {
  //       email: registerData.email,
  //       password: registerData.password,
  //     };

  //     let res = await loginService.Login(loginData);
  //     if (res.status === 200) {
  //       requestBuilder.setToken(res.data.accessToken);
  //       dispatch(SetIsAuth(true));
  //       history.push("/");
  //     }
  //   }
  // }

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = () => {
    register();
  };

  const handleGoogleClick = () => {
    window.location.replace("http google");
  };

  return (
    <div>
      <div className="auth__top">
        <h2>Регистрация</h2>
        <p>Для входа, вам нужно зарегистрироваться</p>
      </div>
      <Block>
        {success ? (
          <Form
            form={form}
            className="login-form"
            name="register"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              hasFeedback
              name="email"
              icon="mail"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="E-mail"
              />
            </Form.Item>
            <Form.Item
              hasFeedback
              name="name"
              rules={[
                { min: 3, message: "Add more symboles" },
                { max: 18, message: "Enough" },
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Имя"
              />
            </Form.Item>
            <Form.Item
              hasFeedback
              name="surname"
              rules={[
                { min: 5, message: "Add more symboles" },
                { max: 18, message: "Enough" },
                {
                  required: true,
                  message: "Please input your Surname!",
                },
              ]}
            >
              <Input
                value={surname}
                onChange={(e) => {
                  setSurname(e.target.value);
                }}
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Фамилия"
              />
            </Form.Item>
            <Form.Item
              name="password"
              hasFeedback
              rules={[
                { min: 8, message: "Add more symboles" },
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Пароль"
              />
            </Form.Item>

            <Form.Item
              name="confirm"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("The passwords that you entered do not match!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                value={confirm}
                onChange={(e) => {
                  setConfirm(e.target.value);
                }}
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Повторить пароль"
              />
            </Form.Item>

            <div className="auth__wrapper_button">
              <Form.Item shouldUpdate className="button">
                {() => (
                  <Button
                    className="button"
                    type="primary"
                    size="middle"
                    htmlType="submit"
                    disabled={
                      !form.isFieldsTouched(true) ||
                      !!form
                        .getFieldsError()
                        .filter(({ errors }) => errors.length).length
                    }
                  >
                    ЗАРЕГИСТРИРОВАТЬСЯ
                  </Button>
                )}
              </Form.Item>
              <div onClick={handleGoogleClick}>
                <GoogleSquareFilled className="Google" />
              </div>
            </div>
            <Form.Item>
              <Link className="auth__register-link" to="/auth/signin">
                Войти в аккаунт
              </Link>
            </Form.Item>
          </Form>
        ) : (
          <div className="auth__success-block">
            <div className="auth__success-icon">
              <InfoCircleTwoTone />
            </div>
            <h2>Подтвердите свой аккаунт</h2>
            <p>
              На Вашу почту отправлено письмо с ссылкой на подтверждение
              аккаунта.
            </p>
          </div>
        )}
      </Block>
    </div>
  );
};

export default RegisterForm;
