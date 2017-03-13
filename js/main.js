accordion = document.getElementById('main');
titles = accordion.getElementsByTagName('button');

for (var i = 0; i < titles.length; i++){
    titles[i].addEventListener('click', displayAccordion);
}

function displayAccordion(){
    content = this.nextElementSibling;

    if (content.style.display != 'block') {
        content.style.display = 'block';
    } else{
        content.style.display = 'none';
    }
}