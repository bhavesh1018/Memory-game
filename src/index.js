document.addEventListener('DOMContentLoaded',()=>{
    const cards=[
        {
            name:'blank',
            img:'src/images/1.png'
        },
        {
            name:'burger',
            img:'src/images/2.png'
        },
        {
            name:'fries',
            img:'src/images/3.png'
        },
        {
            name:'hotdog',
            img:'src/images/4.png'
        },
        {
            name:'icecream',
            img:'src/images/5.png'
        },
        {
            name:'milkshake',
            img:'src/images/6.png'
        },
        {
            name:'pizza',
            img:'src/images/7.png'
        },
        {
            name:'white',
            img:'src/images/8.png'
        },
        {
            name:'blank',
            img:'src/images/1.png'
        },
        {
            name:'burger',
            img:'src/images/2.png'
        },
        {
            name:'fries',
            img:'src/images/3.png'
        },
        {
            name:'hotdog',
            img:'src/images/4.png'
        },
        {
            name:'icecream',
            img:'src/images/5.png'
        },
        {
            name:'milkshake',
            img:'src/images/6.png'
        },
        {
            name:'pizza',
            img:'src/images/7.png'
        },
        {
            name:'white',
            img:'src/images/8.png'
        }
        
        ]
    let result=0
    const results=document.querySelector('#result')
    results.textContent=result
    let clicks=0
    let cardschosen=[]
    let cardschosenid=[]
    let cardswon=[]
    cards.sort(() => 0.5-Math.random())
    console.log(cards)
    const grid=document.querySelector('.grid')
    function createboard(){
        for(let i=0;i<cards.length;i++){
            const card=document.createElement('img')
            card.setAttribute('src','src/images/1.png')
            card.setAttribute('data-id',i)
            grid.appendChild(card)
            card.addEventListener('click',clickyclick)
        }
    }
    function clickyclick(){
        clicks+=1
        if(clicks<=10){
            let cardid=this.getAttribute('data-id')
            cardschosen.push(cards[cardid].name)
            cardschosenid.push(cardid)
            this.setAttribute('src',cards[cardid].img)
            if (cardschosen.length===2){
                setTimeout(checkcards,500)  
            }
        }
        else{
            grid.innerHTML="Game over !!!"
        }
    }
    function checkcards(){
        const cardsa=document.querySelectorAll('img')
        const results=document.querySelector('#result')
        if(cardschosenid[0]==cardschosenid[1]){
            alert('clicked the same image')
            cardsa[cardschosenid[0]].setAttribute('src','src/images/1.png')
            cardsa[cardschosenid[1]].setAttribute('src','src/images/1.png')
        }
        else if (cardschosen[0]===cardschosen[1]){
            alert('Great !')
            result+=1
            results.textContent=result
            cardsa[cardschosenid[0]].setAttribute('src','src/images/8.png')
            cardsa[cardschosenid[1]].setAttribute('src','src/images/8.png')
            cardsa[cardschosenid[0]].removeEventListener('click',clickyclick)
            cardsa[cardschosenid[1]].removeEventListener('click',clickyclick)
            cardswon.push(cardschosen)
        }
        else{
            cardsa[cardschosenid[0]].setAttribute('src','src/images/1.png')
            cardsa[cardschosenid[1]].setAttribute('src','src/images/1.png')
        }
        
        cardschosen=[]
        cardschosenid=[]
    }
    createboard()

})