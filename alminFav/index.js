const genText = document.getElementById("gen-text")

genText.addEventListener("click", function() {
  let messages = [
    "You are stronger than you think!!",
    "This stress is temporary!",
    "Your hard work will pay off!",
    "Keep believing in yourself!",
    "You’re doing amazing!!!",
    "Every challenge you face is making you stronger.",
    "You’re capable of more than you realize.",
    "The future is bright, and it’s yours to shape.",
    "Your effort today will lead to success tomorrow.",
    "Even in the storm, good days are coming",
    "Like the sun after the rain, brighter days await",
    "Hold on, the clouds will part, and you'll find peace",
    "Your journey to better days starts today",
    "Trust that the good days are worth the wait",
    "Just like the lyrics say, your time will come",
    "Keep your head up, the good days will find you",
    "No matter how hard today feels, tomorrow is a fresh start",
    "The best is yet to come, just keep breathing",
    "Good days are on their way, you just need to believe",
    "Believe in yourself, even when it feels tough.",
    "You’ve got the strength to overcome it all.",
    "Keep going, the best is yet to come.",
    "You are not alone in this journey.",
    "Your dreams are closer than they seem.",
    "You are enough, just as you are."
  ]
  const textEl = document.querySelector(".textMessage")
  textEl.textContent = messages[Math.floor( Math.random()*messages.length )]
})