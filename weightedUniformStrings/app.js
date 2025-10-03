function weightedUniformStrings(s, queries) {
    
    const possibleWeights = new Set();
    
    let currentChar = '';
    let currentCount = 0;


    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const charWeight = char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
        if (char === currentChar) {
            currentCount++; 
           
            currentCount = 1;
        }
        
        possibleWeights.add(charWeight * currentCount);
    }

    const results = [];
    for (const query of queries) {
        if (possibleWeights.has(query)) {
            results.push('Yes');
        } else {
            results.push('No');
        }
    }

    return results;
}