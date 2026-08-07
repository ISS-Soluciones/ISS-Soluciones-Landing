export function CarouselSlide({ imgSrc }: { imgSrc: string }) {
    return(
        <>  
            <div className="carousel-slide">
                <img src={imgSrc} alt="Image" />
            </div>
        </>
    )

}