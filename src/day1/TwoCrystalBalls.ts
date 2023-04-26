export default function two_crystal_balls(breaks: boolean[]): number {
    let hi = breaks.length;
    let lo = 0;

    while (lo < hi) {
        let m = lo + (Math.floor((hi-lo)/2));
        let v = breaks[m];
        let pv = breaks[m-1];
        if (v && !pv) {
            return m;
        } else if (v && pv) {
            hi = m;
        } else {
            lo = m+1;
        }
    }
    return -1;
}