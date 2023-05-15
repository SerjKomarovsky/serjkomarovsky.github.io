import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Preview } from './Preview';

import './index.css';

import './setup.worker';

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
    <StrictMode>
        <Preview />
    </StrictMode>,
);
