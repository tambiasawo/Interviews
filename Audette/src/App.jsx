import React from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

const App = () => (
  <div className="app">
    <QueryClientProvider client={queryClient}>
      <Dashboard />
    </QueryClientProvider>
  </div>
);

export default App;
