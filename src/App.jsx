import { useState } from 'react'
import './App.css'
import Authenticate from "./components/Authenticate";
import SignUpForm from "./components/SignUpForm";

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Authenticate />
      <SignUpForm />
    </>
  );
};
