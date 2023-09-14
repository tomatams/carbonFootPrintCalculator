import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Pages/Layout';
import AdminPage from './Pages/AdminPage';
import CarbonFootPrintCalcPage from './Pages/CarbonFootPrintCalcPage';
import QuestionForm from './Components/Admin/QA/QuestionForm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/createForm",
        element: <CarbonFootPrintCalcPage />
      },
      {
        path: "/admin",
        element: <AdminPage />
      },
      {
        path: "/QuestionForm",
        element: <QuestionForm />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
