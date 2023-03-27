const input=document.getElementById("input");
const show=document.getElementById("show");
const btn=document.getElementById("btn");
btn.addEventListener("click",()=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${input.value.toLowerCase()}`).then((res)=>{
        return res.json()
    }).then((data)=>{
        // console.log(data);
        let html=`
        <img src=${data.sprites.front_default} alt="photo">
        <h2>${input.value.toUpperCase()}</h2>
        <p>Ability:${data.abilities[1].ability.name}</p>
        `;
        show.innerHTML=html;
        input.value="";
    })
})