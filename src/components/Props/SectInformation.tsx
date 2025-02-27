interface InfoProps {
    title: string;
    content: string[];
  }
  
  const Info = ({ title, content }: InfoProps) => {
    return (

        <div className="flex flex-col">
            <div className="lg:mt-0 mt-20">
                <h1 className="font-light lg:text-6xl md:text-6xl text-4xl">{title}</h1>
            </div>
    
            <div className="lg:w-[600px] md:w-[585px] sm:w-[275px] mt-10 text-lg">
                {content.map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                ))}
            </div>
        </div>
    );
  };
  
  export default Info;
  