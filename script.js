{\rtf1\ansi\ansicpg1252\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 let clickCount = 0;\
const button = document.getElementById('clickButton');\
const counter = document.getElementById('counter');\
\
button.addEventListener('click', () => \{\
  clickCount++;\
  counter.textContent = `You've clicked $\{clickCount\} times. Keep going!`;\
\
  // Move the button randomly\
  const x = Math.random() * (window.innerWidth - button.offsetWidth);\
  const y = Math.random() * (window.innerHeight - button.offsetHeight);\
  button.style.position = 'absolute';\
  button.style.left = `$\{x\}px`;\
  button.style.top = `$\{y\}px`;\
\
  // Fake encouragement messages\
  if (clickCount === 10) \{\
    counter.textContent = "You're getting closer!";\
  \} else if (clickCount === 50) \{\
    counter.textContent = "Almost there! Just a few more clicks!";\
  \} else if (clickCount === 100) \{\
    counter.textContent = "Wow, you're persistent! Keep clicking!";\
  \}\
\});}