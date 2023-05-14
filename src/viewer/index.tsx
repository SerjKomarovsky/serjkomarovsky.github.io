import React from 'react';
import ReactDOM from 'react-dom/client';
import { Preview } from './Preview';

import './setup.worker';

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
    <React.StrictMode>
        <Preview />
    </React.StrictMode>,
);
