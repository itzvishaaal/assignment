const pup=require('puppeteer');


function run () {
    
    return new Promise(async(resolve) => {
            const browser = await pup.launch({headless:false,defaultViewport: null, args:['--start-maximized']});
            const page = await browser.newPage();
            await page.setDefaultNavigationTimeout(0);
            await page.goto("https://prefeitura.pbh.gov.br/saude/licitacao/pregao-eletronico-151-2020", {waitUntil: 'networkidle0'});
        


            let result = await page.evaluate(() => {
                
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

                return ` Publication Date: ${publicationDate} \n Bidding Date: ${biddingDate} \n Object: ${object} \n links: ${link}`;

            })
            
            browser.close();
            return resolve(result);

        
    })
}
run().then(console.log);