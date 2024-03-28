
const fastBittons = document.querySelector('#buttonCatagoryAll');
const secondButtons = document.querySelector('#secondButtons');
const comedyBtn = document.querySelector('#comedy');
const drawingBtn = document.querySelector('#drawing');

const buttons = [fastBittons, secondButtons, comedyBtn, drawingBtn]

const activeButtonHandler = (active) => {
    inactiveButtonHandler()
    active.classList.remove("text-gray-700", "hover:bg-gray-300", "bg-gray-200")
    active.classList.add("bg-[#FF1F3D]", "hover:bg-[#dc2d44]", "text-white");
}
const inactiveButtonHandler = async () => {
    for (let index = 0; index < buttons.length; index++) {
        const button = buttons[index];
        button.classList.remove("bg-[#FF1F3D]", "hover:bg-[#dc2d44]", "text-white");
        button.classList.add("text-gray-700", "hover:bg-gray-300", "bg-gray-200");
    }
}

const loadAllCatagoryAPI = async () => {
    funLoadingSpinner(true) // loading spinner
    activeButtonHandler(fastBittons)
    
    const res = await fetch('https://openapi.programming-hero.com/api/videos/category/1000')
    const valu = await res.json()
    // console.log(data)


    // showAllCatagory(alldata);


    if (valu.status === true) {
        showAllCatagory(valu.data);
    }
    else {

        console.log('Data no found')
    }
    // console.log(alldata)

}


const loadCatagoryMusicAPI = async () => {

    activeButtonHandler(secondButtons)
    funLoadingSpinner(true)
    const refs = await fetch(`https://openapi.programming-hero.com/api/videos/category/1001`)
    const convert = await refs.json();
    const data = convert.data;
    showAllCatagory(data);
}

const loadCatagoryComedyAPI = async () => {
    activeButtonHandler(comedyBtn) //active current button

    funLoadingSpinner(true)
    const refs = await fetch(`https://openapi.programming-hero.com/api/videos/category/1003`)
    const convert = await refs.json();
    const comedy = convert.data;
    showAllCatagory(comedy);

}
const loadCatagoryDrawingAPI = async () => {
    activeButtonHandler(drawingBtn) //active current button
    funLoadingSpinner(true)
    const refs = await fetch(`https://openapi.programming-hero.com/api/videos/category/1005`)
    const convert = await refs.json();
    const drawing = convert.data;
    showAllCatagory(drawing);
}




const showAllCatagory = alldata => {



    const mainContainItems = document.getElementById('mainContainItems');
    mainContainItems.innerHTML = ' ';

    alldata.forEach(element => {
        // console.log(element)
        const AllCatagoryCreatElement = document.createElement('div');
        AllCatagoryCreatElement.innerHTML = `
                <div class=" w-80 bg-base-100 mb-8">
                    <figure><img  class="rounded-lg h-48 w-80" src="${element.thumbnail}"
                            alt="Shoes" /></figure>
                    <div class="py-6">
                        <div class="flex">
                            <div>
                                <img class="w-12 h-12 rounded-full" src="${element.authors[0].profile_picture}">
                            </div>
                            <div class="pl-4">
                                <h4 class="leading-6 text-1xl manrope-uniquifier font-bold">${element.title}</h4>
                                <div class="inline-flex">
                                    <p class="leading-8">${element.authors[0].profile_name}</p>
                                    <div class="grid ml-1 place-items-center "><img class="w-4 h-4 mt-1 "
                                            src="./img/Group 3.png" alt=""></div>
                                </div>
                                <h5>91K views</h5>
                            </div>
                        </div>
                    </div>
                </div>
    `;

        mainContainItems.appendChild(AllCatagoryCreatElement);


    });

    funLoadingSpinner(false);

}



/* loadAllCatagoryAPI(); */


const funLoadingSpinner = (isloading) => {
    const loadingSpiner = document.getElementById('loading');
    if (isloading) {
        loadingSpiner.classList.remove("hidden");
    }
    else {
        loadingSpiner.classList.add("hidden");
    }
}

loadAllCatagoryAPI()






