export function passwordValidator(password, flg) {
  if (flg!= true) {
    if (!password || password.length <= 0) return "Password can't be empty."
    if (password != "amisha") return "Incorrect password"
    return ''
    }
    else {
      if (!password || password.length <= 0) return "Password can't be empty."
      return ''
    }
}
