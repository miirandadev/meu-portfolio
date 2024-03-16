const observar = new IntersectionObserver((entries) =>{
    entries.forEach((meuElementos) => {
        if (meuElementos.isIntersecting){
            meuElementos.target.classList.add('aparecer')
        }else{
            meuElementos.target.classList.remove('aparecer')
        }
    })
})

const elementos = document.querySelectorAll('.scroll')
elementos.forEach((element) => observar.observe(element))

