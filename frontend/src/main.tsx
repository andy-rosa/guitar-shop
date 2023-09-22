import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import {router} from "./app/provider/router/router";
import {RouterProvider} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
      <RouterProvider router={router} />
      <App />
  </StrictMode>
);
