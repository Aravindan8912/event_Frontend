import { useState } from "react";
import type { ChangeEvent } from "react";
import axios from "axios";

interface FormData {
  username: string;
  email: string;
  password: string;
}

const CreateAccount = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateAccount = async () => {
    try {
      const response = await axios.post("/api/users", formData);
      alert("Account created successfully!");
      console.log(response.data);
    } catch (error: unknown) {
      alert("Error creating account");
      if (error instanceof Error) {
        console.error(error.message);
      } else if (axios.isAxiosError(error)) {
        console.error(error.response?.data);
      } else {
        console.error("An unknown error occurred");
      }
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Create Account</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />
      <br />
      <br />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <br />
      <br />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <br />
      <br />
      <button onClick={handleCreateAccount}>Create Account</button>
    </div>
  );
};

export default CreateAccount;
