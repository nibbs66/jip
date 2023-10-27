
export function generateSlides (length = 10, sig = 0){
   return Array.from({length}).map((_, idx) => {
        idx = sig || idx;
        return {
            url: `https://source.unsplash.com/random/800x450?sig=${ idx }`
        }
    } )

}
