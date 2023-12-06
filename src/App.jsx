import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from "./sections/Layout";
import HomePage from "./Pages/HomePage";
import Work from "./Pages/Work";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
