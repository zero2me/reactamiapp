export function emailValidator(email, flg) {
  if (flg != true ){
    const re = /\S+@\S+\.\S+/
    if (!email || email.length <= 0) return "Email can't be empty."
    if (email != "amishasinha@gmail.com") return "User not found."
    if (!re.test(email)) return 'Ooops! We need a valid email address.'
    return ''
  }
  else {
    const re = /\S+@\S+\.\S+/
    if (!email || email.length <= 0) return "Email can't be empty."
    if (!re.test(email)) return 'Ooops! We need a valid email address.'
    return ''
  }
}
