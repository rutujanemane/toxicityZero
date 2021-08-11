const Discord = require('discord.js')
const client = new Discord.Client()

client.on('message', (receivedMessage) => {
  if (receivedMessage.author == client.user) { // Prevent bot from responding to its own messages
    return
  }

  if (receivedMessage.content.startsWith("!")) {
    processCommand(receivedMessage)
  }
})

function processCommand(receivedMessage) {
  let fullCommand = receivedMessage.content.substr(1) // Remove the leading exclamation mark
  let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
  let primaryCommand = splitCommand[0] // The first word directly after the exclamation is the command
  let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command

  console.log("Command received: " + primaryCommand)
  console.log("Arguments: " + arguments) // There may not be any arguments

  if (primaryCommand == "multiply") {
    multiplyCommand(arguments, receivedMessage)
  } else if (primaryCommand == "add") {
    addCommand(arguments, receivedMessage)
  } else if (primaryCommand == "subtract") {
    subtractCommand(arguments, receivedMessage)
  } else if (primaryCommand == "divide") {
    divideCommand(arguments, receivedMessage)
  } else {
    receivedMessage.channel.send("I don't understand the command. Try `!add` or `!subtract` or `!multiply` or `!divide`")
  }
}

function multiplyCommand(arguments, receivedMessage) {
  if (arguments.length < 2) {
    receivedMessage.channel.send("Not enough values to multiply. Try `!multiply 2 4 10` or `!multiply 5.2 7`")
    return
  }
  let product = 1
  arguments.forEach((value) => {
    product = product * parseFloat(value)
  })
  receivedMessage.channel.send("The result of " + arguments[0] + "*" + arguments[1] + " is: " + product.toString())
}
function addCommand(arguments, receivedMessage) {
  if (arguments.length < 2) {
    receivedMessage.channel.send("Not enough values to add. Try `!add 2 4 10` or `!add 5.2 7`")
    return
  }
  let sum = 0
  arguments.forEach((value) => {
    sum = sum + parseFloat(value)
  })
  receivedMessage.channel.send("The result of " + arguments[0] + "+" + arguments[1] + " is: " + sum.toString())
}
function subtractCommand(arguments, receivedMessage) {
  if (arguments.length < 2) {
    receivedMessage.channel.send("Not enough values to subtract. Try `!subtract 2 4 10` or `!subtract 5.2 7`")
    return
  }
  let diff = 0
  diff = parseFloat(arguments[0]) - parseFloat(arguments[1])
  receivedMessage.channel.send("The result of " + arguments[0] + "-" + arguments[1] + " is: " + diff.toString())
}
function divideCommand(arguments, receivedMessage) {
  if (arguments.length < 2) {
    receivedMessage.channel.send("Not enough values to divide. Try `!divide 4 2` or `!divide 3.5 7`")
    return
  }
  let div = 0
  div = parseFloat(arguments[0]) / parseFloat(arguments[1])
  receivedMessage.channel.send("The result of " + arguments[0] + "/" + arguments[1] + " is: " + div.toString())
}

client.login('ODI4NjIwNjM0ODU4MDYxODU1.YGsPGg.JX_w0V7jVcro6gPij-y7_nqLmO8');