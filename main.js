import { villagers } from './data/villagers.js'

const villagersNav = document.querySelector('.villagersNav')
const navList = document.querySelector('.navList')
const selection = document.querySelector('.selection')
const villagerInfo = document.querySelector('.villagerInfo')


function removeChildren(e) {
    while (e.firstChild) {
        e.removeChild(e.firstChild)
    }
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
            populateVillagerInfo(foundVillager)
        })

        villagerAnchor.appendChild(listItem)
        navList.appendChild(villagerAnchor)
    })
    villagersNav.appendChild(navList)
}

function populateVillagerInfo(villagerData){
    removeChildren(selection)
    let villagerImage = document.createElement('img')
    villagerImage.src = `https://acnhapi.com/v1/images/villagers/${villagerData.id}`
    selection.appendChild(villagerImage)

    let villagerInfo = document.createElement('div')
    villagerInfo.className = '.villagerInfo'
    selection.appendChild(villagerInfo)

    let villagerName = document.createElement('h4')
    let villagerSaying = document.createElement('h5')
    let villagerHobby = document.createElement('p')

    villagerName.textContent = villagerData.name
    villagerSaying.textContent = `"${villagerData.saying}"`
    villagerHobby.textContent = `Hobby: ${villagerData.hobby}`

    villagerInfo.appendChild(villagerName)
    villagerInfo.appendChild(villagerSaying)
    villagerInfo.appendChild(villagerHobby)
}

populateVillagers(villagers)