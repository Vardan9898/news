import ReactDOM from 'react-dom/client';

import './index.scss';
import App from './App';
import { CompositeProvider } from './providers/composite-provider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <CompositeProvider>
    <App />
  </CompositeProvider>
);

