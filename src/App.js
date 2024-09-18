import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentForm from './StudentForm';
import FormSubmitted from './FormSubmitted';


console.log('App component started');
function App() {
  console.log('App component rendered');
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentForm />} />
        <Route path="/submitted" element={<FormSubmitted />} />
      </Routes>
    </Router>
  );
}

export default App;
