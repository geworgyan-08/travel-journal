import { Header } from "../component/Header";
import { Form, Input, Button, Card } from "antd";
import "./Login.css";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router";


export default function Login() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);


  const handleLogin = (values) => {
    const { username, password } = values;
    if (username.trim() !== "" && password.trim() !== "") {
      login(username, password); 
      navigate("/my-journal");   
    }
  };

  return (
    <div className="login-page">
      <div className="login-background">
        <Header />

        <div className="login-form-container">
          <Card className="login-card">
            <h2 className="login-title">Welcome Back</h2>

            <Form
              layout="vertical"
              className="login-form"
              onFinish={handleLogin}
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[{ required: false, message: "Please enter your username" }]}
              >
                <Input
                  placeholder="Enter your username"
                  style={{
                    background: "#f5f5f5",
                    border: "1px solid #ccc",
                    borderRadius: "12px",
                    padding: "12px 15px",
                    fontSize: "16px",
                    color: "#333",
                    transition: "all 0.3s ease",
                  }}
                />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: false, message: "Please enter your password" }]}
              >
                <Input.Password
                  placeholder="Enter your password"
                  style={{
                    background: "#f5f5f5",
                    border: "1px solid #ccc",
                    borderRadius: "12px",
                    padding: "12px 15px",
                    fontSize: "16px",
                    color: "#333",
                    transition: "all 0.3s ease",
                  }}
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit" 
                  block
                  style={{
                    background: "linear-gradient(90deg, #ff7f50, #ffb347)",
                    border: "none",
                    borderRadius: "12px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    padding: "12px",
                    transition: "all 0.3s ease",
                    color: "#fff",
                  }}
                >
                  Sign In
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
}
