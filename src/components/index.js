


// getitem to localstorage
const getAllFevorite = () => {
    const getAllData = localStorage.getItem('fevorites')
    if(getAllData){
        const fevorites = JSON.parse(getAllData)
        return fevorites;
    }
    else{
        return []
    }
}

// setitem to coffee localstorage
const addToFevorite = (coffee) => {
    const fevorites = getAllFevorite()
    const isExist = fevorites.find(item => item.id == coffee.id)
    if(isExist){
        return alert('this id already exist')
    }
    fevorites.push(coffee)
    localStorage.setItem('fevorites', JSON.stringify(fevorites))
}

// removeitem to localstorage


export {addToFevorite, getAllFevorite}