// Script principal para Trio Tech

document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            const expanded = mobileMenu.classList.toggle('hidden');
            mobileMenuButton.setAttribute('aria-expanded', !expanded);
        });
    }
    
    // Carrossel de depoimentos
    const testimonialContainer = document.querySelector('.testimonial-container');
    const prevButton = document.getElementById('prev-testimonial');
    const nextButton = document.getElementById('next-testimonial');
    
    if (testimonialContainer && prevButton && nextButton) {
        let currentIndex = 0;
        const testimonials = document.querySelectorAll('.testimonial-item');
        const totalTestimonials = testimonials.length;
        let slideWidth;
        
        // Função para calcular a largura do slide com base no viewport
        function calculateSlideWidth() {
            if (window.innerWidth >= 1024) {
                return testimonialContainer.offsetWidth / 3;
            } else if (window.innerWidth >= 768) {
                return testimonialContainer.offsetWidth / 2;
            } else {
                return testimonialContainer.offsetWidth;
            }
        }
        
        // Inicializar largura do slide
        slideWidth = calculateSlideWidth();
        
        // Atualizar largura do slide quando a janela for redimensionada
        window.addEventListener('resize', function() {
            slideWidth = calculateSlideWidth();
            updateSlidePosition();
        });
        
        // Função para atualizar a posição do slide
        function updateSlidePosition() {
            testimonialContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
            
            // Atualizar estado dos botões
            prevButton.disabled = currentIndex === 0;
            nextButton.disabled = currentIndex >= totalTestimonials - (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1);
            
            // Atualizar ARIA para acessibilidade
            testimonialContainer.setAttribute('aria-label', `Depoimento ${currentIndex + 1} de ${totalTestimonials}`);
        }
        
        // Botão anterior
        prevButton.addEventListener('click', function() {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlidePosition();
            }
        });
        
        // Botão próximo
        nextButton.addEventListener('click', function() {
            if (currentIndex < totalTestimonials - 1) {
                currentIndex++;
                updateSlidePosition();
            }
        });
        
        // Inicializar posição
        updateSlidePosition();
        
        // Adicionar navegação por teclado
        testimonialContainer.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft') {
                if (currentIndex > 0) {
                    currentIndex--;
                    updateSlidePosition();
                }
            } else if (e.key === 'ArrowRight') {
                if (currentIndex < totalTestimonials - 1) {
                    currentIndex++;
                    updateSlidePosition();
                }
            }
        });
    }
    
    // Validação de formulário acessível
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validar campos obrigatórios
            let isValid = true;
            const requiredFields = contactForm.querySelectorAll('[required]');
            const errorMessages = document.querySelectorAll('.error-message');
            
            // Remover mensagens de erro anteriores
            errorMessages.forEach(msg => msg.remove());
            
            // Verificar cada campo obrigatório
            requiredFields.forEach(field => {
                field.classList.remove('border-red-500');
                
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('border-red-500');
                    
                    // Criar mensagem de erro
                    const errorMsg = document.createElement('p');
                    errorMsg.className = 'text-red-500 text-sm mt-1 error-message';
                    errorMsg.setAttribute('id', `${field.id}-error`);
                    errorMsg.textContent = 'Este campo é obrigatório';
                    
                    // Associar mensagem de erro ao campo para leitores de tela
                    field.setAttribute('aria-describedby', `${field.id}-error`);
                    field.setAttribute('aria-invalid', 'true');
                    
                    // Inserir mensagem após o campo
                    field.parentNode.insertBefore(errorMsg, field.nextSibling);
                } else {
                    field.setAttribute('aria-invalid', 'false');
                    if (field.hasAttribute('aria-describedby')) {
                        field.removeAttribute('aria-describedby');
                    }
                }
            });
            
            // Validar formato de e-mail
            const emailField = document.getElementById('email');
            if (emailField && emailField.value.trim() && !isValidEmail(emailField.value)) {
                isValid = false;
                emailField.classList.add('border-red-500');
                
                // Criar mensagem de erro
                const errorMsg = document.createElement('p');
                errorMsg.className = 'text-red-500 text-sm mt-1 error-message';
                errorMsg.setAttribute('id', 'email-format-error');
                errorMsg.textContent = 'Por favor, insira um e-mail válido';
                
                // Associar mensagem de erro ao campo
                emailField.setAttribute('aria-describedby', 'email-format-error');
                emailField.setAttribute('aria-invalid', 'true');
                
                // Inserir mensagem após o campo
                emailField.parentNode.insertBefore(errorMsg, emailField.nextSibling);
            }
            
            // Se o formulário for válido, exibir mensagem de sucesso
            if (isValid) {
                // Esconder formulário
                contactForm.classList.add('hidden');
                
                // Criar mensagem de sucesso
                const successMsg = document.createElement('div');
                successMsg.className = 'bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4';
                successMsg.setAttribute('role', 'alert');
                successMsg.innerHTML = `
                    <strong class="font-bold">Mensagem enviada com sucesso!</strong>
                    <p>Agradecemos seu contato. Retornaremos em breve.</p>
                `;
                
                // Inserir mensagem antes do formulário
                contactForm.parentNode.insertBefore(successMsg, contactForm);
                
                // Anunciar para leitores de tela
                const liveRegion = document.createElement('div');
                liveRegion.setAttribute('aria-live', 'assertive');
                liveRegion.className = 'sr-only';
                liveRegion.textContent = 'Sua mensagem foi enviada com sucesso. Agradecemos seu contato. Retornaremos em breve.';
                document.body.appendChild(liveRegion);
                
                // Remover região ao vivo após anúncio
                setTimeout(() => {
                    document.body.removeChild(liveRegion);
                }, 3000);
            } else {
                // Focar no primeiro campo com erro
                const firstInvalidField = contactForm.querySelector('.border-red-500');
                if (firstInvalidField) {
                    firstInvalidField.focus();
                }
                
                // Anunciar erros para leitores de tela
                const liveRegion = document.createElement('div');
                liveRegion.setAttribute('aria-live', 'assertive');
                liveRegion.className = 'sr-only';
                liveRegion.textContent = 'O formulário contém erros. Por favor, verifique os campos destacados.';
                document.body.appendChild(liveRegion);
                
                // Remover região ao vivo após anúncio
                setTimeout(() => {
                    document.body.removeChild(liveRegion);
                }, 3000);
            }
        });
    }
    
    // Função para validar e-mail
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Adicionar suporte a navegação por teclado para links e botões
    const focusableElements = document.querySelectorAll('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
    
    focusableElements.forEach(element => {
        // Garantir que elementos interativos tenham foco visível
        element.addEventListener('focus', function() {
            this.classList.add('focus-visible');
        });
        
        element.addEventListener('blur', function() {
            this.classList.remove('focus-visible');
        });
    });
    
    // Adicionar suporte para pular navegação com tecla Tab
    const skipLink = document.querySelector('a[href="#main-content"]');
    if (skipLink) {
        skipLink.addEventListener('focus', function() {
            this.classList.add('focus:not-sr-only');
        });
        
        skipLink.addEventListener('blur', function() {
            this.classList.remove('focus:not-sr-only');
        });
    }
});
