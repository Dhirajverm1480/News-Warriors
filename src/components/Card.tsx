type CardProps = {
    title: string;
    desciption: string;
    image: string;
}

export const Card = ({title, desciption, image}: CardProps) => {
  return (
    <div className="w-72 rounded-lg shadow-lg mt-5 cursor-pointer">
        <img src={image} alt={title} className="bg-gray-200 w-full h-48 rounded-lg" />
        <div className="bg-white rounded-lg px-2 pb-1">
            <h2 className="font-bold text-xl my-2">{title}</h2>
            <p className="text-md font-medium text-gray-600">{desciption}</p>
        </div>
    </div>
  )
}
