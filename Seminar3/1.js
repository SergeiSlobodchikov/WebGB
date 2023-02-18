const cels = prompt('Введите температуру в градусах Цельсия');
const farh = (cels * 1.8 + 32).toFixed(1);
alert(`Цельсий: ${cels}, Фаренгейт: ${farh}`);