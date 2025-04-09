interface ServiceInfoProps {
    title: string;
    content: string[];
  }
  
  const ServiceInfo = ({ title, content }: ServiceInfoProps) => {
    return (

        <div className="flex flex-col">
            <div className="mt-20">
                <h1 className="font-semibold lg:text-xl md:text-6xl text-4xl">{title}</h1>
            </div>
    
            <div className="lg:w-[600px] md:w-[585px] sm:w-[275px] text-lg">
                {content.map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                ))}
            </div>
        </div>
    );
  };
  
  export default ServiceInfo;