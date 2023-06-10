const key = document.querySelectorAll('.key')
const audio = document.querySelectorAll('.audio')

const letters = ['a','s','d','f','g','h','j','k','l']

//Função que lê a tecla pressionada 
window.addEventListener('keydown',((event) => {
    //O evento keydown e o mais completo, para a leitura de teclas 
    const letter = event.key
    // event.key nos retorna a letra presionada 
    letters.filter((i)=>{
        if(i == letter){
            const index = letters.indexOf(i)
            key[index].classList.add('sound','playing')
            audio[index].play()
            setTimeout(()=>{
                key[index].classList.remove('sound','playing')
            },500)
        }
    }
    )
}))


