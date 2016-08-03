module.exports = function fizzBuzzYakShave(words, options) {
  options = options || {}

  if (typeof options === 'number') {
    options = { max: options }
  }

  options.min = options.min || 1
  options.max = options.max || 100

  words = words || {
    Fizz: 3,
    Buzz: 5,
    Yak: 7,
    Shave: 11
  }

  for (var num = options.min; num <= options.max; num++) {
    var label = ''

    Object.keys(words)
      .forEach(function (word) {
        if (num % words[word] === 0) {
          label += word
        }
      })

    console.log(label || num)
  }
}

if (require.main === module) {
  if (process.argv[2] === '--eponymous') {
    module.exports(null, { max: 1155 })
  } else {
    module.exports()
  }
}
