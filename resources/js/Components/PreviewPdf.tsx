import React, { useEffect, useRef } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import 'pdfjs-dist/web/pdf_viewer.css';

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.js`;

interface PDFPreviewProps {
    pdfUrl: string;
}

export const PDFPreview: React.FC<PDFPreviewProps> = ({ pdfUrl }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const loadPDF = async () => {
            if (!pdfUrl) return;

            const loadingTask = pdfjsLib.getDocument(pdfUrl);
            const pdf = await loadingTask.promise;
            const page = await pdf.getPage(1);

            const viewport = page.getViewport({ scale: 1.5 });
            const canvas = canvasRef.current;
            if (canvas) {
                const context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                const renderContext = {
                    canvasContext: context!,
                    viewport: viewport,
                };
                page.render(renderContext);
            }
        };

        loadPDF();
    }, [pdfUrl]);

    return (
        <div>
            <canvas ref={canvasRef}></canvas>
        </div>
    );
};
