document.addEventListener("DOMContentLoaded", () => {
  // 1. Эффект "scrolled" для хедера
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // 2. Логика для вкладок (Tabs)
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetTab = button.getAttribute("data-tab");

      // Убираем active у всех кнопок и контента
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      // Добавляем active нужным элементам
      button.classList.add("active");
      document.getElementById(targetTab).classList.add("active");
    });
  });

  // 3. Логика для аккордеона
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    const content = item.querySelector(".accordion-content");

    header.addEventListener("click", () => {
      // Закрываем все остальные открытые элементы
      accordionItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains("active")) {
          otherItem.classList.remove("active");
          otherItem.querySelector(".accordion-content").style.maxHeight = null;
        }
      });

      // Открываем/закрываем текущий
      item.classList.toggle("active");
      if (item.classList.contains("active")) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = null;
      }
    });
  });
});
