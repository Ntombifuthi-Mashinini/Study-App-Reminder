const subject = document.querySelector('#subject').value 
const time = document.querySelector('#time').value 

if (time === "") { 
  document.querySelector('#error').innerHTML = "Please enter a time" 
} else { 
  const reminderString = `${subject} at ${time}`
  document.querySelector('#reminders').innerHTML = reminderString 
  document.querySelector('#error').innerHTML = "" 
}
