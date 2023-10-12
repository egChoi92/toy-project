import DefaultLayout from "layout/DefaultLayout";
import { Routes, Route  } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import pages from "routes/pages";
import "styles/App.scss";

function App() {
  return (
    <Router>
      <DefaultLayout>
        <Routes>
          {pages.map((page) => (
            <Route key={page.id} path={page.path} element={page.element} />
          ))}
        </Routes>
      </DefaultLayout>
    </Router>
  );
}

export default App;
