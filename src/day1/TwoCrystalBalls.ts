export default function two_crystal_balls(breaks: boolean[]): number {
    function binarySearchMethod():number{
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

    function sqrtMethod(): number {
        let jumpInterval = Math.floor(Math.sqrt(breaks.length));
        let i = jumpInterval
        for(;i<breaks.length;i += jumpInterval){
            if (breaks[i]) {
                break;
            }
        }

        i -= jumpInterval;
        for(let j=0; j<jumpInterval && i<breaks.length; ++j) {
            if (breaks[i+j]) return (i+j);
        }
        return -1;
    }

    // return binarySearchMethod();
    return sqrtMethod();

}