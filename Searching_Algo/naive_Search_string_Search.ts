let naiveSearch = (str, word) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < word.length; j++) {
            if (word[j]?.toLowerCase() !== str[i + j].toLowerCase()) break;
            if (j === word.length - 1) count++;
        }
    }
    return count;
}

console.log(naiveSearch("Hi i am jay", "jay"));
// Logic:
/** 
 * Hi i am jay -> jay
 * Here we compare first occurrence of j if not match then we break inner loop
 * If it's match them we check next charter, since i is still at current position
 * so, we need to add i + j;
 * Ex:let i = 8 -> j  and j = 0 -> j
 * its match now i = i + j => 8 + 0 = j; match
 * its match now, i = i+ j => 8 + 1 = a; match
 * its match now, i = i+ j => 8 + 2 = y; match
 * as J =  word.length - 1 so, we increment the count.
 * at last we return the counter value.
 *
 * 
 */