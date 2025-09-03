const subject = document.querySelector('#subject').value
const time = document.querySelector('#time').value

if (time === "") {
  document.querySelector('#error').innerHTML = "Please enter a time"
} else {
  const reminderString = `${subject} at ${time}`

  const li = document.createElement('li')
  li.textContent = reminderString

  document.querySelector('#reminders').appendChild(li)

  document.querySelector('#error').innerHTML = ""
  
  document.querySelector('#subject').value = ""
  document.querySelector('#time').value = ""
}

