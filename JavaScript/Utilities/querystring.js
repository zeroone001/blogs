/*
    querystring.encode
*/
function stringifyKey (k) {
    switch (typeof k) {
        case 'string':
            return k;
        case 'number':
            return isFinite(k) ? k : '';
        case 'boolean':
            return k ? 'true' : 'false';
        default:
            return '';
    }
}

let encode = (obj) => {
    if (typeof obj === 'object') {
        return Object.keys(obj).map((key) => {
            var ke = encodeURIComponent(stringifyKey(key)) + '=';
            if (Array.isArray(obj[key])) {
                return obj[key].map((v) => {
                    return ke + encodeURIComponent(stringifyKey(v));
                }).join('&');
            } else {
                return ke + encodeURIComponent(stringifyKey(obj[key]));
            }
        }).filter(Boolean).join('&');
    }
};
console.log(encode({
    qw: '312',
    aa: 'eqwewq',
    bb: false,
    cc: ['dasd', 'dasdas']
}));
