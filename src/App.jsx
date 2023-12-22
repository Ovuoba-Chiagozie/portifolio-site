import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./sections/Layout";
import HomePage from "./Pages/HomePage";
import Work from "./Pages/Work";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <Router>
    <Routes>
        <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/work" element={<Navigate replace to="/" />} />
            <Route path="/work/:id" element={<Work />} />
        </Route>
        <Route path="/notfound" element={<NotFound />} />
    </Routes>
</Router>
  );
}

export default App;
