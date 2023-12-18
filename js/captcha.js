function verifyHuman(isHuman) {
  document.getElementById('humanCheck').style.display = 'none'
  document.getElementById('humaneCheck').style.display = 'block'
}

function verifyHumane(isHumane) {
  const captchaBox = document.getElementById('captchaBox')
  const overlay = document.getElementById('overlay')
  if (isHumane) {
    captchaBox.style.display = 'none'
    overlay.style.display = 'none'
  } else {
    captchaBox.style.display = 'none'
    overlay.style.display = 'none'
  }
}
