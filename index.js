module.exports = function dow(y, m, d) {
    var t = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
    y -= Number(m < 3);
    return (y + Math.round(y/4) - Math.round(y/100) + Math.round(y/400) + t[m-1] + d) % 7;
};
