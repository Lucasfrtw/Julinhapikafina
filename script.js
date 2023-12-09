document.addEventListener('DOMContentLoaded', function() {
    const targetDate = new Date(2023, 11, 9, 0, 0, 0).getTime();
  
    function checkEventStatus() {
      const now = new Date().getTime();
      const timeRemaining = targetDate - now;
  
      if (timeRemaining <= 0) {
        window.location.href = 'ju.html';
      } else {
        updateCountdown();
        setInterval(updateCountdown, 1000);
      }
    }
  
    function updateCountdown() {
      const now = new Date().getTime();
      const timeRemaining = targetDate - now;
  
      if (timeRemaining <= 0) {
        document.getElementById('countdown').innerText = 'Evento passou!';
      } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
        document.getElementById('countdown').innerText = `Faltam ${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
      }
    }
  
    checkEventStatus();
  });
  