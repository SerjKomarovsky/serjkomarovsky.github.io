import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import type { PDFDocumentProxy } from 'pdfjs-dist';

import { DownloadButton } from '../DownloadButton';
import { Loader } from '../Loader';
import { PDF_FILENAME } from '../../config';

import 'react-pdf/dist/esm/Page/TextLayer.css';
import './Preview.css';

const options = {
    cMapUrl: 'cmaps/',
    standardFontDataUrl: 'standard_fonts/',
};

type PDFFile = string | File | null;

export function Preview() {
    const [file, setFile] = useState<PDFFile>(`/${PDF_FILENAME}`);
    const [isLoading, setIsLoading] = useState(true);
    const [numPages, setNumPages] = useState(0);

    function onFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { files } = event.target;

        if (files && files[0]) {
            setFile(files[0] || null);
        }
    }

    function onDocumentLoadSuccess({ numPages: nextNumPages }: PDFDocumentProxy) {
        setNumPages(nextNumPages);
        setIsLoading(false);
    }

    return (
        <section className="Preview">
            <Document
                className="Preview__document"
                file={file}
                loading={<Loader />}
                onLoadSuccess={onDocumentLoadSuccess}
                options={options}>
                {Array.from(new Array(numPages), (_, index) => (
                    <Page
                        className="Preview__document__page"
                        key={`page_${index + 1}`}
                        pageNumber={index + 1}
                        loading=""
                        renderAnnotationLayer={false}
                        width={900}
                    />
                ))}
            </Document>
            {!isLoading && <DownloadButton url={`/${PDF_FILENAME}`} />}
        </section>
    );
};
