module.exports.paging = (page) => {
    const result = {};

    result.next = parseInt(page) + 1;

    if (parseInt(page) > 1) {
        result.prev = parseInt(page) - 1;
    } else {
        result.disablePrev = 'pointer-events: none;';
        result.hiddenPrev = 'hidden';
        result.numberPrev = 'display: none;';
    }

    result.page = page;

    return result;
}