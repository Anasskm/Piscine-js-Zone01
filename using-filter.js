const filterShortStateName = arr => arr.filter(zebi => zebi.length < 7);

const filterStartVowel = arr => arr.filter(zebi => /[aeiou]/i.test(zebi[0]));

const filter5Vowels = arr => arr.filter(zebi => zebi.match(/[aeiou]/gi).length >= 5)


function filter1DistinctVowel(arr) {
    const out = arr.filter(zebi => {
        let pattern = /[aeiou]/gi
        return new Set(zebi.toLowerCase().match(pattern)).size === 1


    })
    return out
}

const multiFilter = obj => obj.filter(o => o.capital.length >= 8 && /[^aeiou]/i.test(o.name[0]) && /[aeiou]/gi.test(o.tag) && o.region !== "South") 