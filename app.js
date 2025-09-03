const addBtn = document.querySelector('#addBtn')
const subjectInput = document.querySelector('#subject')
const timeInput = document.querySelector('#time')
const remindersList = document.querySelector('#reminders')
const errorMsg = document.querySelector('#error')

function addReminder() {
  const subject = subjectInput.value
  const time = timeInput.value

  if (time === "") {
    errorMsg.innerHTML = "Please enter a time"
    return
  }

  const reminderString = `${subject} at ${time}`

  const li = document.createElement('li')
  li.textContent = reminderString

  const delBtn = document.createElement('button')
  delBtn.textContent = "Delete"
  
  delBtn.onclick = function() {
    li.remove()
  }

  li.appendChild(delBtn)
  remindersList.appendChild(li)

  errorMsg.innerHTML = ""
  subjectInput.value = ""
  timeInput.value = ""
}

addBtn.addEventListener('click', addReminder)



