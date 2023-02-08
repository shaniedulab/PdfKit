PDFDocument=require('pdfkit');

function buildPDF(dataCallback,endCallback){
    const doc=new PDFDocument();
    const express=require('express');
    doc.on('data',dataCallback);
    doc.on('end',endCallback);
    doc
    .fontSize(25)
    .text('demo PDF')
    doc.end();

}

module.exports ={buildPDF};