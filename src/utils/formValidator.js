// Utilitário para validação de formulários
export const validateForm = (formData) => {
  const errors = {};
  
  // Validar nome
  if (!formData.name.trim()) {
    errors.name = 'Nome é obrigatório';
  }
  
  // Validar email
  if (!formData.email.trim()) {
    errors.email = 'Email é obrigatório';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
    errors.email = 'Email inválido';
  }
  
  // Validar mensagem
  if (!formData.message.trim()) {
    errors.message = 'Mensagem é obrigatória';
  } else if (formData.message.trim().length < 10) {
    errors.message = 'Mensagem deve ter pelo menos 10 caracteres';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
