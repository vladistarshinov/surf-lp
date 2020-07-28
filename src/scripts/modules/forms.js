const forms = () => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input');
    
    const message = {
        loading: 'Загрузка...',
        success: 'Cпасибо! Мы свяжемся с вами через несколько минут!',
        failure: 'Что-то пошло не так...'
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading; // textContent === innerHTML
        document.querySelector('.status').style.color = "yellow";
        document.querySelector('.status').style.textTransform = "capitalize";
        let result = await fetch(url, {
            method: "POST",
            body: data
        });

        return await result.text();
    };

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    }

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);

            postData('../../assets/telegramAPI/server.php', formData)
                .then(result => {
                    console.log(result);
                    statusMessage.textContent = message.success;
                    statusMessage.style.color = "lime";
                })
                .catch(() => {
                    statusMessage.textContent = message.failure;
                    statusMessage.style.color = "red";
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                });
        });
    });
};

export default forms;