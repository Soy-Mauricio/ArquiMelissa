interface ImgProps {
    img_one: string;
    img_two: string;
  }
  
  const InfoTrayectory = ({ img_one, img_two }: ImgProps) => {
    return (

        <div className="flex items-center justify-between mt-10">
            <div className="w-[45%]">
                <img src={img_one} alt="" />
            </div>
    
            <div className="w-[45%]">
                <img src={img_two} alt="" />
            </div>
        </div>
    );
  };
  
export default InfoTrayectory;