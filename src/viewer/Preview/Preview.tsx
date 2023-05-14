import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import './Preview.css';

import type { PDFDocumentProxy } from 'pdfjs-dist';

const options = {
    cMapUrl: 'cmaps/',
    standardFontDataUrl: 'standard_fonts/',
};

type PDFFile = string | File | null;

export function Preview() {
    const [file, setFile] = useState<PDFFile>('/document.pdf');
    const [numPages, setNumPages] = useState<number>();

    function onFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { files } = event.target;

        if (files && files[0]) {
            setFile(files[0] || null);
        }
    }

    function onDocumentLoadSuccess({ numPages: nextNumPages }: PDFDocumentProxy) {
        setNumPages(nextNumPages);
    }

    return (
        <div className="Example">
            <div className="Example__container">
                <div className="Example__container__document">
                    <Document file={file} onLoadSuccess={onDocumentLoadSuccess} options={options}>
                        {Array.from(new Array(numPages), (el, index) => (
                            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                        ))}
                    </Document>
                </div>
            </div>
        </div>
    );
};