import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs/promises';
import path from 'path';

export const watermarkPDF = async (filePath: string, userName: string, userEmail: string) => {
    try {
        const fullPath = path.resolve(filePath);
        const pdfBytes = await fs.readFile(fullPath);
        const pdfDoc = await PDFDocument.load(pdfBytes);

        const helveticaFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
        const pages = pdfDoc.getPages();

        const watermarkText = `Downloaded by: ${userName} (${userEmail}) | Mustafa Aabid JKBOSE Portal`;

        pages.forEach((page) => {
            const { width, height } = page.getSize();
            page.drawText(watermarkText, {
                x: 50,
                y: 30,
                size: 10,
                font: helveticaFont,
                color: rgb(0.7, 0.7, 0.7), // Light gray
                opacity: 0.5,
            });

            // Diagonal watermark in the middle
            page.drawText(watermarkText, {
                x: width / 4,
                y: height / 2,
                size: 20,
                font: helveticaFont,
                color: rgb(0.8, 0.8, 0.8),
                opacity: 0.15,
                rotate: { angle: 45, type: 'degrees' as any },
            });
        });

        return await pdfDoc.save();
    } catch (error) {
        console.error("Watermarking error:", error);
        throw error;
    }
};
