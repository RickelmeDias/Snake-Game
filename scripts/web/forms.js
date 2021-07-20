const Forms = {
        Open() {
                document
                        .querySelector('.forms-modal-overlay')
                        .classList.add('open');

                document
                        .querySelector('.forms-modal')
                        .classList.add('open');
        },

        Close() {
                document
                        .querySelector('.forms-modal-overlay')
                        .classList.remove('open');
                document
                        .querySelector('.forms-modal')
                        .classList.remove('open');
        },

        nameForms(event) {
                event.preventDefault();

                try {
                        const name = document.querySelector('input#name').value;
                        executeName(name);
                        Forms.Close();
                } catch (error) {
                        alert(error.message);
                }
        }

}