const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  let index = 0;
  const main = document.body
  main.addEventListener('keydown', function (e) {
        const key = parseInt(e.detail || e.which);

        if (key === code[index]) {
            index++;
            console.log(key)

            if (index === code.length) {
                alert('Hooray!');
                index = 0;
            }
        }
        else {
            index = 0;
        }
    })
}
