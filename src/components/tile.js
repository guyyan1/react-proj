function Tile(props){
    return(
        <img
            class="object-cover rounded-full h-[100px] w-[100px] block m-2 h-24 rounded-full sm:mx-0 sm:shrink-0"
            src={props.img} 
            alt="Object's Img"
        />
    )
}

export default Tile;