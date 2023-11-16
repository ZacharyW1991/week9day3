
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Container from "react-bootstrap/esm/Container";
import Register from './views/Register';
import AllQuestions from './views/All';

export default function App() {

  return (
    <BrowserRouter>
      <Container data-bs-theme="dark">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/all" element={<AllQuestions />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

