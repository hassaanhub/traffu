var con = document.querySelector(".container")

var love = document.querySelector("i")

con.addEventListener("dblclick", function(){
    love.style.transform = 'scale(1)'
    love.style.color = "red"
    love.style.opacity = 0.7
    setTimeout(function(){
        love.style.opacity = 0
    },1000)
    setTimeout(function(){
        love.style.transform = 'scale(0)'
    },2000)
})