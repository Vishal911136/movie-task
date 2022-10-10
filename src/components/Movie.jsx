import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'


const Movie = () =>{
    const [data,setData] = useState([]);
    const getData = async() =>{
        const apiResponse = await fetch('https://movie-task.vercel.app/api/popular?page=1');
        const result = await apiResponse.json();
        setData(result.data.results)
    }
    
    useEffect(()=>{
        getData();
    },[])
    
    // console.log(data)

    return(
        <>
            <div className="movies_list">
                {
                    data.map((value) =>{
                        return(
                            <div key={value.id}>
                                <Card style={{ width: '16rem' }}>
                                    <Card.Img style={{height:'240px'}} variant="top" src="https://image.tmdb.org/t/p/original/nogV4th2P5QWYvQIMiWHj4CFLU9.jpg" />
                                    <Card.Body>
                                        <Card.Title>{value.original_title}</Card.Title>
                                        <Card.Text>
                                            Release Date : {value.release_date} <br />
                                            Language: {value.original_language} <br />
                                            ⭐ {value.vote_average}
                                        </Card.Text>
                                        <Link to={`/overview/${value.id}`}>
                                            <Button variant="dark">View</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Movie;