const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const p1=document.createElement('p');
p1.classList.add('p1');
p1.textContent="Hey I’m red!";
p1.style.color='red';

container.appendChild(p1);
