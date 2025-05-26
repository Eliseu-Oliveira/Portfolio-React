// Configuração do EmailJS para o formulário de contato
import emailjs from '@emailjs/browser';

// Inicializar EmailJS com a chave pública
// Nota: Em um ambiente real, você deve substituir 'YOUR_PUBLIC_KEY' pela sua chave real
export const initEmailJS = () => {
  emailjs.init('YOUR_PUBLIC_KEY');
};

// Função para enviar o formulário de contato
export const sendContactForm = async (formData, formRef) => {
  try {
    // Em um ambiente real, você deve substituir 'YOUR_SERVICE_ID' e 'YOUR_TEMPLATE_ID' pelos seus IDs reais
    const result = await emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formRef.current
    );
    
    return {
      success: true,
      message: 'Mensagem enviada com sucesso! Entrarei em contato em breve.',
      result
    };
  } catch (error) {
    console.error('Erro ao enviar mensagem:', error);
    return {
      success: false,
      message: 'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.',
      error
    };
  }
};
