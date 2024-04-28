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
}

const FEEDBACK_KEY = "feedback-form-state"

const formRefs = {
  form: document.querySelector(".feedback-form"),
  input: document.querySelector('input[type="email"]'),
  message: document.querySelector("textarea")
}

function onFormSubmit(event) {
  event.preventDefault()
  if (formData.email.trim() === "" || formData.message.trim() === "") {
    alert("Fill please all fields");
    return;
  }
  console.log(formData);
  localStorage.removeItem(FEEDBACK_KEY)
  event.currentTarget.reset()
}

function onFormInput(event) {
  event.preventDefault()
  formData[event.target.name] = event.target.value
  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData));
}

formRefs.form.addEventListener("submit", onFormSubmit)
formRefs.form.addEventListener("input", onFormInput)


function onTextarea(event) {
  localStorage.setItem(FEEDBACK_KEY, event.target.value)
}
formRefs.message.addEventListener("input", onTextarea)

function populateTxtarea() {
  const msgText = localStorage.getItem(FEEDBACK_KEY)
  if (!msgText) return
  formRefs.message.value = msgText
}