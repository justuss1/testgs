var url = "https://script.google.com/macros/s/AKfycbxUmOu5afiEtrBhBq53QA0npxq2JRN1wgWcFPcs0QW8-TiYx47WFzaEdOTa5cmlGJCoAw/exec"

function testGS() {
    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent = d[0].status;
        });
}

document.getElementById("btn").addEventListener("click", testGS);


async function  addGS() {

    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
        'Content-Type': 'application/json'
       
        },
        redirect: 'follow', // manual, *follow, error
        body: JSON.stringify({name:"Justinas"}) // body data type must match "Content-Type" header
  });

    

}

document.getElementById("btn2").addEventListener("click", addGS);
