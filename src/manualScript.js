




/* publication data */
const publicationDate = document.querySelector('.field-content .lbl-licitacao:nth-child(1)').childNodes[1].textContent;

/* bidding date */ 

const biddingDate = document.querySelector('.field-content .lbl-licitacao:nth-child(19)').childNodes[1].textContent;

/* object */
let object = document.querySelector('.field-content>p:nth-child(6)').innerText;


/* link */
let links = document.querySelectorAll('.field-content>table .field--type-image>a');

link = [];

for (let i=0; i<links.length; i++){
    x = links[i].getAttribute('href');
    link.push(x);
}

console.log(` Publication Date: ${publicationDate} \n Bidding Date: ${biddingDate} \n Object: ${object} \n links: ${link}`);