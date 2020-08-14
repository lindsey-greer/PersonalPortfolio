import { villagers } from './data/villagers.js'

const villagersNav = document.querySelector('.villagersNav')
const navList = document.querySelector('.navList')
const selection = document.querySelector('.selection')


function removeChildren(e) {
    while (e.firstChild) {
        e.removeChild(e.firstChild)
    }
}

function getLastNumber(url) {
    let end = url.lastIndexOf('/')
    let start = end - 2
    if (url.charAt(start) === '/'){
        start ++
    }
    return url.slice(start, end)
}

function populateVillagers(villagers){
    villagers.forEach(villager => {
        let villagerAnchor = document.createElement('a')
        villagerAnchor.href = '#'
        let listItem = document.createElement('li')
        listItem.textContent = villager.name

        villagerAnchor.addEventListener('click', e => {
            let villagerName = e.target.textContent
            const foundVillager = villagers.find(villager => villager.name === villagerName)
            console.log(foundVillager)
            populateVillagerView(foundVillager)
        })

        villagerAnchor.appendChild(listItem)
        navList.appendChild(villagerAnchor)
    })
    villagersNav.appendChild(navList)
}

function populateVillagerView(villagerData){
    removeChildren(selection)
    let villagerImage = document.createElement('img')
    let villagerName = document.createElement('h4')
    let villagerSaying = document.createElement('h5')
    let villagerHobby = document.createElement('p')

    
    villagerImage.src = `https://acnhapi.com/v1/images/villagers/${villagerData.id}`
    villagerName.textContent = villagerData.name
    villagerSaying.textContent = `"${villagerData.saying}"`
    villagerHobby.textContent = `Hobby: ${villagerData.hobby}`

    selection.appendChild(villagerImage)
    selection.appendChild(villagerName)
    selection.appendChild(villagerSaying)
    selection.appendChild(villagerHobby)
}

populateVillagers(villagers)

