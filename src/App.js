import DefaultLayout from "layout/DefaultLayout";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "routes";
import "styles/App.scss";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <DefaultLayout>
        <AppRoutes />
      </DefaultLayout>
    </Router>
  );
}

export default App;
