// Utilitário para gerar o PDF do currículo
import { jsPDF } from 'jspdf';
import curriculo from '../assets/curriculo.js';

// Função para converter o texto do currículo em PDF
export const generatePDF = () => {
  // Criar nova instância do jsPDF
  const doc = new jsPDF();
  
  // Configurações de fonte e tamanho
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);
  
  // Processar o texto do currículo
  const lines = curriculo.split('\n');
  let y = 20; // Posição vertical inicial
  
  lines.forEach(line => {
    // Título principal
    if (line.startsWith('# ')) {
      doc.setFontSize(18);
      doc.setFont('helvetica', 'bold');
      doc.text(line.substring(2), 20, y);
      y += 10;
      doc.setFontSize(12);
      doc.setFont('helvetica', 'normal');
    } 
    // Subtítulos
    else if (line.startsWith('## ')) {
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text(line.substring(3), 20, y);
      y += 8;
      doc.setFontSize(12);
      doc.setFont('helvetica', 'normal');
    } 
    // Subtítulos menores
    else if (line.startsWith('### ')) {
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text(line.substring(4), 20, y);
      y += 7;
      doc.setFontSize(12);
      doc.setFont('helvetica', 'normal');
    } 
    // Itens de lista
    else if (line.startsWith('- ')) {
      doc.text('• ' + line.substring(2), 25, y);
      y += 6;
    } 
    // Texto normal
    else if (line.trim() !== '') {
      doc.text(line, 20, y);
      y += 6;
    }
    
    // Adicionar nova página se necessário
    if (y > 280) {
      doc.addPage();
      y = 20;
    }
  });
  
  // Salvar o PDF
  return doc.output('blob');
};

// Função para download do currículo
export const downloadCV = () => {
  const pdfBlob = generatePDF();
  const url = URL.createObjectURL(pdfBlob);
  
  // Criar link para download
  const link = document.createElement('a');
  link.href = url;
  link.download = 'curriculo.pdf';
  document.body.appendChild(link);
  link.click();
  
  // Limpar
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
