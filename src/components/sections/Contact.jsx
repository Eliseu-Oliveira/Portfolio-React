import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  // Refs para o formulário
  const formRef = useRef();
  
  // Estados para controle do formulário
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  // Função para atualizar o estado do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Função para enviar o formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    // Simulação de envio (substitua com sua configuração real do EmailJS)
    // Nota: Para implementação real, você precisará configurar o EmailJS com suas credenciais
    setTimeout(() => {
      // Simulando sucesso
      setLoading(false);
      setSuccess(true);
      
      // Resetar formulário
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Comentado: Implementação real com EmailJS
      /*
      emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      )
      .then((result) => {
        setLoading(false);
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
        console.error(error);
      });
      */
    }, 1500);
  };

  // Variantes de animação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Links de redes sociais
  const socialLinks = [
    { name: 'GitHub', icon: 'github', url: 'https://github.com/Eliseu-Oliveira/' },
    { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com/in/eliseu-germano/' },
    { name: 'Instagram', icon: 'instagram', url: 'https://instagram.com/eliseugermano' },
  ];

  return (
    <section id="contact" className="py-20 bg-dark">
      <div className="container px-4 mx-auto">
        <motion.div 
          className="mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2 
            className="section-title"
            variants={itemVariants}
          >
            Entre em <span className="text-primary">Contato</span>
          </motion.h2>
          <motion.div 
            className="w-20 h-1 mx-auto bg-primary"
            variants={itemVariants}
          ></motion.div>
          <motion.p 
            className="max-w-2xl mx-auto mt-4 text-gray-300"
            variants={itemVariants}
          >
            Tem um projeto em mente? Vamos conversar e transformar suas ideias em realidade.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Informações de contato */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.h3 
              className="mb-6 text-2xl font-bold"
              variants={itemVariants}
            >
              Vamos Conversar
            </motion.h3>
            
            <motion.div 
              className="mb-8 space-y-4"
              variants={containerVariants}
            >
              <motion.div 
                className="flex items-start"
                variants={itemVariants}
              >
                <div className="flex items-center justify-center w-12 h-12 mr-4 text-primary bg-primary/10 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Email</h4>
                  <a href="mailto:seu.email@exemplo.com" className="text-gray-300 hover:text-primary">
                    eliseugermano@hotmail.com
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                variants={itemVariants}
              >
                <div className="flex items-center justify-center w-12 h-12 mr-4 text-primary bg-primary/10 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Localização</h4>
                  <p className="text-gray-300">
                    Uberlândia Minas Gerais, Brasil
                  </p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.h3 
              className="mb-4 text-2xl font-bold"
              variants={itemVariants}
            >
              Redes Sociais
            </motion.h3>
            
            <motion.div 
              className="flex space-x-4"
              variants={itemVariants}
            >
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 text-gray-300 transition-colors bg-dark-light rounded-lg hover:text-primary hover:bg-primary/10"
                  aria-label={social.name}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Formulário de contato */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.form 
              ref={formRef}
              onSubmit={handleSubmit}
              className="p-6 bg-dark-light rounded-xl"
              variants={containerVariants}
            >
              <motion.div 
                className="mb-4"
                variants={itemVariants}
              >
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Seu nome"
                />
              </motion.div>
              
              <motion.div 
                className="mb-4"
                variants={itemVariants}
              >
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="seu.email@exemplo.com"
                />
              </motion.div>
              
              <motion.div 
                className="mb-6"
                variants={itemVariants}
              >
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="form-input"
                  placeholder="Sua mensagem aqui..."
                ></textarea>
              </motion.div>
              
              <motion.button
                type="submit"
                className="w-full btn btn-primary flex justify-center items-center"
                disabled={loading}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {loading ? (
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  'Enviar Mensagem'
                )}
              </motion.button>
              
              {success && (
                <motion.div 
                  className="p-4 mt-4 text-green-400 bg-green-400/10 rounded-md"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Mensagem enviada com sucesso! Entrarei em contato em breve.
                </motion.div>
              )}
              
              {error && (
                <motion.div 
                  className="p-4 mt-4 text-red-400 bg-red-400/10 rounded-md"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.
                </motion.div>
              )}
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
