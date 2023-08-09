const randomList = []

//randomDate
const minDate = new Date('2000-01-01').getTime();
const maxDate = new Date('2050-12-21').getTime();

//randomWord 
const words = ['Iran', 'Germany', 'Amerika', 'Canada', 'Turkey', 'France'];



const addRandomParameter = () => {
    const RandomParameter = {
        randomNumber: Math.floor(Math.random() * (10000 - 1 + 1) + 1),
        randomDate: new Date(Math.floor(Math.random() * (maxDate - minDate + 1) + minDate)),
        randomWord: words[Math.floor(Math.random() * words.length)]
    }
    randomList.push(RandomParameter)
}

addRandomParameter()
console.log(randomList)