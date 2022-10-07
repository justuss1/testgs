
function testGS() {
    var url = "https://script.google.com/macros/s/AKfycbxA6VhNEaZfnKZ_53eT9kMgK97e67M8FmjdgN8irVcn16DrrO_JuWoN0gQjatzDm8vOXQ/exec"

    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent = d[0].status;

        });
}

document.getElementById("btn").addEventListener("click", testGS);