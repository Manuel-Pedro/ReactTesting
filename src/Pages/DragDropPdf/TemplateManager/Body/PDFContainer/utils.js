export function getUniqueId() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
}

export function getDefaultSize(item) {
    switch ( item.name ) {
        case 'TEXT_FIELD':
            return { width : '100px', height : '50px' };
        case 'SIGNATURE':
            return { width : '200px', height : '150px' };
        case 'RADIO':
            return { width : '80px', height : '30px' };
        case 'CUSTOM':
            return { width : '80px', height : '30px' };
        default:
            return { width : '50px', height : '50px' };
    }
}