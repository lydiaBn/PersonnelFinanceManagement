import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { Auth } from "./pages/auth";
import { FinancialRecordsProvider } from "./contexts/financial-record-context";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="navbar">
          <Link to="/">Dashboard</Link>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        <Routes>
          {/* Redirect to the Auth page if the user is signed out */}
          <Route
            path="/"
            element={
              <>
                <SignedOut>
                  <Navigate to="/auth" />
                </SignedOut>
                <SignedIn>
                  <FinancialRecordsProvider>
                    <Dashboard />
                  </FinancialRecordsProvider>
                </SignedIn>
              </>
            }
          />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
