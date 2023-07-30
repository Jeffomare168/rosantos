export function customUseEffect(callback) {
    let mounted = true;
    if (mounted) {
      callback();
    }  
    return () => {
     if (mounted) mounted = false;
    };
 }