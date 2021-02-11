export function getDefaultSize(item) {
    switch ( item.name ) {
        case 'sign':
            return { width : '100px', height : '50px' };
        case 'date':
            return { width : '80px', height : '30px' };
        default:
            return { width : '50px', height : '50px' };
    }
}

export function getUniqueId() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
}