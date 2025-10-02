import Image from 'next/image';
export default function Worker(props){
    return(
        <div className="box_worker ">
                <img className='rounded-full' src={props.img} alt="" />
                <h3 className="font-bold text-center">{props.name}</h3>
                <p className="font-BMitra text-center">{props.task}</p>
            </div>
    )
}