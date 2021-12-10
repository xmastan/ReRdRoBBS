import React from "react";
import { FullPageErrorFallback } from "components/lib";
import { ErrorBoundary } from "components/error-boundary";
import { AuthenticatedApp } from "screens/authenticated-app";
import { UnauthenticatedApp } from "screens/unauthenticated-app";
import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ErrorBoundary fallbackRender={FullPageErrorFallback}>
        <Router>
          <Routes>
            <Route path={"/*"} element={<AuthenticatedApp />} />
            <Route path={"/auth"} element={<UnauthenticatedApp />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </ErrorBoundary>
    </div>
  );
}

export default App;
