function caesarCipher(str, shift) {
  str = str.toLowerCase()
  let result = ''
  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    //код символа в ASCII
    let code = char.charCodeAt()
    if (code >= 97 && code <= 122) {
      code = ((code - 97 + shift) % 26) + 97
      char = String.fromCharCode(code)
    }
    result += char
  }

  return result
}
function codeCaesarCipher(str) {
  str = str.toLowerCase()
  let result = []
  for (let shift = 0; shift < 25; shift++) {
    let resultCipher = ''
    for (let i = 0; i < str.length; i++) {
      let char = str[i]
      let code = char.charCodeAt()
      if (code >= 97 && code <= 122) {
        code = ((code - 97 + shift) % 26) + 97
        char = String.fromCharCode(code)
      }

      resultCipher += char
    }
    result.push(resultCipher)
  }

  return result
}
function decodeCaesarCipher(str) {
  str = str.toLowerCase()
  let result = []
  for (let shift = 0; shift < 25; shift++) {
    let resultCipher = ''
    for (let i = 0; i < str.length; i++) {
      let char = str[i]
      let decode = char.charCodeAt()

      if (decode >= 97 && decode <= 122) {
        decode = ((decode - shift) % 26) + 97
        char = String.fromCharCode(decode)
      }

      resultCipher += char
    }

    result.push(resultCipher)
  }

  return result
}
// let word = String(prompt('Enter a word to encode  '));
// let key = Number(prompt('Enter a key cipher  '))
// const encode = caesarCipher(word, key);

// console.log(`Word = ${word}, Key = ${key}, Encode = ${encode}`);


// const encode2 = allCaesarCipher('Soldier')

// console.log(`Word = Soldier, Encode = ${encode2}`);

// const decode = decodeCaesarCipher('Qhcqcudj')

// console.log('Word decode = Qhcqcudj, result = ', d)
