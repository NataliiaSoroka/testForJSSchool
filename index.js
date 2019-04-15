'use strict'
const params = {
  lines: [
    {
      background: '#5db764',
      updateTime: 3000,
      elements: [
        {
          background: '#00f',
          width: 25
        },
        {
          background: '#0cf',
          width: 50
        }
      ]
    },
    {
      background: '#5d60b7',
      updateTime: 1000,
      elements: [
        {
          background: '#05f',
          width: 15
        },
        {
          background: '#acf',
          width: 60
        }
      ]
    }
  ]
}

function renderElements(arrayOfElements, parent) {
  arrayOfElements.map(el => {
    let element = document.createElement('div');
    element.classList.add('element');
    element.style.width = `${el.width}%`;
    element.style.backgroundColor = el.background;
    parent.appendChild(element);
  });
}

function renderLines(arrayOfLines) {
  const part = 100/arrayOfLines.length | 0;
  arrayOfLines.map(el => {
    let line = document.createElement('div');
    line.classList.add('line');
    line.style.height =  `${part}%`;
    line.style.backgroundColor = el.background;
    setInterval(() => {
      line.style.backgroundColor = randomBackgroundColor();
    }, el.updateTime);
    renderElements(el.elements, line);
    document.body.appendChild(line);
  })
};

function randomBackgroundColor() {
  return `rgb(${Math.floor(Math.random() * (255 - 1)) + 1}, ${Math.floor(Math.random() * (255 - 1)) + 1}, ${Math.floor(Math.random() * (255 - 1)) + 1}`;
}

window.onload = function() {
  renderLines(params.lines);
};




