const mainElement = document.getElementById('main');
if (mainElement) {
  mainElement.remove();
}

const newHeaderElement = document.createElement("h1");
document.body.appendChild(newHeaderElement);
newHeaderElement.id = "victory"; 
const newHeader = document.getElementById('victory'); 

newHeader.textContent = "Melican is the champion";