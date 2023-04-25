export default function bs_list(haystack: number[], needle: number): boolean {
    if (haystack.length === 0) return false;
    let hi = haystack.length;
    let lo = 0;

    while (lo < hi) {
        let m = lo + Math.floor((hi-lo)/2);
        let v = haystack[m];
        if (v ===  needle) return true;
        if (v > needle) {
            hi = m;
        } else if (v < needle) {
            lo = m+1;
        }
    }

    return false;

}