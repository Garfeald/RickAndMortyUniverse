
const randomNumbers = (max) => Math.floor(Math.random() * Math.floor(max));

const check = document.getElementById('button-show').addEventListener('click', () => {
    asyncRick(randomNumbers(667));
    $('.block-button').addClass('changed')
    $('.block-button__main').addClass('block-button__main--active')
})

const asyncRick = async (id) => {
    for(let i =0; i < 30; i++){
    
    const awaitRick = await(fetch(`https://rickandmortyapi.com/api/character/avatar/${id + i}.jpeg`))
        document.getElementById('body').innerHTML +=
            `
                <div id="img1" class="block-image">
                    <img src="${awaitRick.url}" class="image" onclick="infoClick(${id + i})"/>
                </div>
            `
            console.log(awaitRick.url)
    }
}

const backToMain = document.getElementById('button__main').addEventListener('click', () => {
    $('.block-button').removeClass('changed')
    $('.block-button__main').removeClass('block-button__main--active')
    $('.block_autocomplete').removeClass('block_autocomplete--active')
    $("#button-back").removeClass('button-back-display-flex')
    $("#body-details").removeClass('body-details-display-flex')
    $("#body-details").empty();
    document.getElementById('body').innerHTML = ''
})
