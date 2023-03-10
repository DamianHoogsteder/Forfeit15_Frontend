import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import {ChakraProvider} from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
      <BrowserRouter>
          <ChakraProvider>
              <App />
          </ChakraProvider>
      </BrowserRouter>
  </StrictMode>
);
