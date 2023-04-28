export default function bs_list(haystack: number[], needle: number): boolean {
    if (haystack.length === 0) return false;
    let hi = haystack.length;
    let lo = 0;
    let m;

    while (lo < hi) {
        m = lo + Math.floor((hi-lo)/2)
        if (haystack[m] ===  needle) return true;
        if (haystack[m] > needle) {
            hi = m;
        } else if (haystack[m] < needle) {
            lo = m+1;
        }
    }

    return false;

}