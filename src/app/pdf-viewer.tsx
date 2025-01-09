import styles from './PdfViewer.module.css';

const PdfViewer = () => {
  return (
    <div className={styles.pdfContainer}>
      <iframe
        src="/research-document.pdf"
        width="100%"
        height="1000px"
        frameBorder="0"
      >
        This browser does not support PDFs. Please download the PDF to view it: 
        <a href="/research-document.pdf">Download PDF</a>.
      </iframe>
    </div>
  );
};

export default PdfViewer;
