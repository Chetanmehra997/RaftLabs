import Card from "components/card";

const Widget = ({ icon, title, subtitle,footer,footer1 ,sidetext}) => {
  return (
    // <div style={{background:'red'}}>
      <Card extra="!flex-row flex-grow items-center rounded-[20px] bg-mediumpurple" style={{ backgroundColor: 'mediumpurple' }}>
        <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
          <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
            <span className="flex items-center text-brand-500 dark:text-white">
              {icon}
            </span>
          </div>
        </div>

        <div className="h-50 ml-4 flex w-auto flex-col justify-center">
          <p className="font-dm text-sm font-medium text-gray-600">{title}</p>
          <div style={{display:'flex'}}>
          <h4 className="text-ml font-bold text-navy-700" style={{color: 'white' }}>
            {subtitle}
          </h4>
          <p className="font-dm text-xs font-medium ml-2 bg-white p-1" style={{borderRadius:'40%'}}>{sidetext}</p>
          </div>
          
          <p className="font-dm text-sm font-medium text-gray-600"style={{display:'flex'}}>
          <p className="font-dm text-sm font-medium text-gray-600">{footer}</p>
          <p className="font-dm text-sm font-medium ml-1" style={{color:'white'}}>{footer1}</p>
          </p>
          
        </div>
      </Card>

    // </div>

  );
};

export default Widget;
