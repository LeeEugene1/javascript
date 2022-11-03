const list = document.querySelector('.list')

const sort_name_btn = document.querySelector('.sort-options .sort-name')
const sort_meta_btn = document.querySelector('.sort-options .sort-meta')
const sort_age_btn = document.querySelector('.sort-options .sort-age')

let list_items = [
    {
        name: 'Chocolate',
        meta: 'Black',
        age: 30
    },
    {
        name: 'Greape',
        meta: 'Blue',
        age: 25
    },{
        name: 'Apple',
        meta: 'Red',
        age: 45
    },{
        name: 'Banana',
        meta: 'Yellow',
        age: 18
    },
    {
        name: 'Orange',
        meta: 'Orange',
        age: 20
    },
]

let desc = false
sort_name_btn.addEventListener('click',()=>{
    let arr = sort_array_by(list_items, 'name', desc)
    displayList(arr)
    desc = !desc
})
sort_meta_btn.addEventListener('click',()=>{
    let arr = sort_array_by(list_items, 'meta', desc)
    displayList(arr)
    desc = !desc
})
sort_age_btn.addEventListener('click',()=>{
    let arr = sort_array_by(list_items, 'age', desc)
    displayList(arr)
    desc = !desc
})

function sort_array_by(arr, sort, desc){
    arr.sort((a,b)=>{
        if(a[sort] < b[sort]) return - 1
        if(a[sort] > b[sort]) return 1
        return 0
    })

    if (desc) arr.reverse()

    return arr
}

function displayList (array = []){
    list.innerHTML = "";
    for(let i = 0; i < array.length -1; i++){
        let item = array[i]
        let item_elem = document.createElement('div')
        item_elem.classList.add('list-item')

        let title = document.createElement('div')
        title.classList.add('item-title')
        title.innerText = item.name

        let meta = document.createElement('div')
        meta.classList.add('item-meta')
        meta.innerText = item.meta

        let age = document.createElement('div')
        age.classList.add('item-age')
        age.innerText = item.age

        item_elem.appendChild(title)
        item_elem.appendChild(meta)
        item_elem.appendChild(age)
        list.appendChild(item_elem)
    }
}
displayList(list_items)