// custom useEffect that takes in a callback; 
export function customUseEffect(callback, router, setLoading) {
    if (router.isReady) {
        callback(); 
        if (setLoading) setTimeout(() => setLoading(false), 2500)
    }
 }