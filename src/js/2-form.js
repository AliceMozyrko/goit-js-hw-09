// Оголоси поза будь - якими функціями об’єкт formData з полями email та message,
// які спочатку мають порожні рядки як значення: { email: "", message: "" }.

// Використовуй метод делегування для відстеження змін у формі через подію
// input.Зберігай актуальні дані з полів email та message у formData та 
// записуй цей об’єкт у локальне сховище.Використовуй ключ
// "feedback-form-state" для зберігання даних у сховищі.
// При завантаженні сторінки перевір, чи є дані у локальному сховищі. 
// Якщо так, використовуй їх для заповнення форми та об'єкта formData. 
// Якщо ні, залиш поля форми порожніми.
// Перед відправленням форми переконайся, що обидва поля форми заповнені. 
// Якщо будь - яке з полів(властивостей об’єкта formData) порожнє,
// показуй сповіщення з текстом «Fill please all fields». 
// Якщо всі поля заповнені, виведи у консоль об’єкт formData з 
// актуальними значеннями, очисти локальне сховище, об’єкт formData і 
// поля форми.

const formData = {
  email: "",
  message: ""
};

const FEEDBACK_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const email = form.elements.email
const txtAreaMsg = form.elements.message

form.addEventListener("input", (event) => {
  formData.email = email.value.trim()
  formData.message = txtAreaMsg.value.trim()
  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData))
})

if (localStorage.getItem(FEEDBACK_KEY)) {
  const newFormData = JSON.parse(localStorage.getItem(FEEDBACK_KEY))
  email.value = formData.email = newFormData.email
  txtAreaMsg.value = formData.message = newFormData.message
}

form.addEventListener("submit", (event) => {
  event.preventDefault()
  if (!email.value || !txtAreaMsg.value) {
    alert("Fill please all fields")
  } else {
    console.log(formData)
    console.log(email.value)
    console.log(txtAreaMsg.value)
    localStorage.removeItem(FEEDBACK_KEY)
    form.reset()
  }
})