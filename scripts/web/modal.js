const Modal = {
        open() {
    
            // Adicionar a class active ao modal
            // Pesquisar dentro de todo documento o seletor
            document
                    .querySelector('.modal-overlay') // Selector css devolvendo o elemento com esse valor
                    .classList.add('open'); // Adicionar a class
    
            document
                    .querySelector('.modal')
                    .classList.add('open');
    
        },
        close() {
    
            // Remover a classe active do modal
            document
                    .querySelector('.modal-overlay') // Selector css devolvendo o elemento com esse valor
                    .classList.remove('open');
    
            document
                    .querySelector('.modal')
                    .classList.remove('open');
        }
} 