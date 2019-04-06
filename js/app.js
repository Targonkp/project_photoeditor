

const input = document.getElementById("uploadPicture");
const preview1 = document.getElementById('img1');
const btnEl = document.getElementById ('btn');
const saveimgEl = document.getElementById('saveimg');
const canvasforsaveEl = document.getElementById('canvasforsave');
const nodel = document.querySelectorAll('ul li');
const ulEl = document.querySelector('ul');


function previewFile() {
    const file   = input.files[0];
    const reader  = new FileReader();
    console.log(reader.result)

    reader.onloadend = function () {
        preview1.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file);

    } else {
        preview1.src = "";
    }
}


input.addEventListener("change",
    previewFile
);

btnEl.addEventListener('click',
    (evt) => {
        const event = new MouseEvent ('click', evt);
        input.dispatchEvent(event);
    }
);

function func() {
    html2canvas(preview1).then(function(canvas) {
        document.body.appendChild(canvas);
    });

}

saveimgEl.addEventListener(
   'click',
    func
)

const arrEl = Array.from(nodel);
function filter(event){
    preview1.classList.remove('fil1', 'fil2', 'fil3', 'fil4', 'fil5', 'fil6', 'fil7', 'fil8', 'fil9', 'fil10', 'fil11','fil12','fil13','fil14','fil15','fil16');
   if (event.target.value == '1')
   {
       preview1.classList.add('fil1');
   }
    if (event.target.value == '2')
    {
        preview1.classList.add('fil2');
    }
    if (event.target.value == '3')
    {
        preview1.classList.add('fil3');
    }
    if (event.target.value == '4')
    {
        preview1.classList.add('fil4');
    }
    if (event.target.value == '5')
    {
        preview1.classList.add('fil5');
    }
    if (event.target.value == '6')
    {
        preview1.classList.add('fil6');
    }
    if (event.target.value == '7')
    {
        preview1.classList.add('fil7');
    }
    if (event.target.value == '8')
    {
        preview1.classList.add('fil8');
    }
    if (event.target.value == '9')
    {
        preview1.classList.add('fil9');
    }
    if (event.target.value == '10')
    {
        preview1.classList.add('fil10');
    }

    if (event.target.value == '11')
    {
        preview1.classList.add('fil11');
    }
    if (event.target.value == '12')
    {
        preview1.classList.add('fil12');
    }

    if (event.target.value == '13')
    {
        preview1.classList.add('fil13');
    }
    if (event.target.value == '14')
    {
        preview1.classList.add('fil14');
    }
    if (event.target.value == '15')
    {
        preview1.classList.add('fil15');
    }
    if (event.target.value == '16')
    {
        preview1.classList.add('fil16');
    }



}

ulEl.addEventListener('click', filter);


setTimeout(
    function () {
        document.body.style.background="url('css/images/main.jpg')";
        document.body.style.transition='7s';
    },
    2000
);