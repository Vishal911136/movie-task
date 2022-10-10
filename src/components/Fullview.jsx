import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'

const Fullview = () =>{
    const [data,setData] = useState([]);
    const {id} = useParams();
    const [param_id,] = useState(Number(id));

    const getData = async() =>{
        const apiResponse = await fetch('https://movie-task.vercel.app/api/popular?page=1');
        const result = await apiResponse.json();
        const filterData = result.data.results;
        const finalData = filterData.filter((value)=> value.id === param_id);
        setData(finalData)
    }

    useEffect(()=>{
        getData();
    },[])
    return(
        <>
            {
               data.map((ele) =>{
                    return(
                        <div key={ele.id}>
                            <div className="overview_container container">
                                <div className="img_div">
                                    <img style={{width: '75%',maxHeight:'80vh'}} src="https://image.tmdb.org/t/p/original/nogV4th2P5QWYvQIMiWHj4CFLU9.jpg" alt="spiderman" />
                                </div>
                                <div style={{margin:'auto'}} className="overview_text_container">
                                    <h3>{ele.title}</h3>
                                    <h4><b>Language :</b> {ele.original_language}</h4>
                                    <h4 style={{color:'green'}}>⭐{ele.vote_average}</h4>
                                    <h5><b>Release Date :</b>{ele.release_date}</h5>
                                    <p>{ele.overview}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Fullview;