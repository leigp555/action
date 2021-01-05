var n =1
var id =setInterval(() => {
    if (n<=200){
        fa.style.left = n + 'px'
        n = n +1
    }
    else{
        clearInterval(id)
    }
},1000/1005)


setTimeout(()=>{
    demo.classList.add('end')
  },0)
  