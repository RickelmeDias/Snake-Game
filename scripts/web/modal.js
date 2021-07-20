const Modal = {
        open() {
                document
                        .querySelector('.modal-overlay')
                        .classList.add('open');
                document
                        .querySelector('.modal')
                        .classList.add('open');
        },
        close() {
                document
                        .querySelector('.modal-overlay')
                        .classList.remove('open');
                document
                        .querySelector('.modal')
                        .classList.remove('open');
        }
}