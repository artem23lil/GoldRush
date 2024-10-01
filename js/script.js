let goldAmount = 0;
let miningPower = 1; // Начальная мощность майнинга

document.getElementById("mineBtn").addEventListener("click", () => {
    const successChance = Math.random(); // Вероятность успеха (от 0 до 1)
    if (successChance < 0.2) { // 20% шанс на добычу золота
        goldAmount += miningPower;
        document.getElementById("status").innerText = `Ви здобули: ${miningPower} золотих монет!`;
    } else {
        document.getElementById("status").innerText = "На жаль, ви нічого не знайшли.";
    }
    document.getElementById("goldAmount").innerText = goldAmount; // Обновление количества золота
});

// Обработка кнопок других функций (Друзі, Рейтинг, Інвентар)
document.getElementById("friendsBtn").addEventListener("click", () => {
    alert("Система друзів ще в розробці.");
});

document.getElementById("leaderboardBtn").addEventListener("click", () => {
    alert("Таблиця лідерів ще в розробці.");
});

document.getElementById("inventoryBtn").addEventListener("click", () => {
    alert("Інвентар ще в розробці.");
});
