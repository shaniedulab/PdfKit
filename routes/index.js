const express=require('express');
const pdfService=require('../service/pdf-service')
const router = require('express').Router();
router.get('/pdf', (req, res, next)=>{
    const stream=res.writeHead(200, {
        'Content-Type': 'application/PDF',
        'Content-Disposition': 'attachment; filename="pdf.pdf"',});

        pdfService.buildPDF((chunk)=>stream.write(chunk),
        ()=>stream.end());
});

module.exports = router;