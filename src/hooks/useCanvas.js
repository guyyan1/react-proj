import { useRef , useEffect} from 'react'

function useCanvas(draw){
    const ref = useRef();
    useEffect(() => {
        const canvas = ref.current;
        const context = canvas.getContext("2d");
        let count = 0;
        let animationId;
        function renderer(){
            count ++;
            draw(context, count);
            animationId = window.requestAnimationFrame(renderer);
        }
        renderer();
        return () => window.cancelAnimationFrame(animationId);
        
    }, [draw])  

    return ref;
}

export default useCanvas;