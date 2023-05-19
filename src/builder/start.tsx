import React from 'react';
import ReactPDF from '@react-pdf/renderer';
import { Document as MyDoc } from './document/index.js';
import { PDF_FILENAME } from '../config.js';

ReactPDF.render(<MyDoc />, `./public/${PDF_FILENAME}`);
