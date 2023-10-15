import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../card/Cards";
import { Container, Row, Col } from "reactstrap";
import { Link, useParams } from "react-router-dom";
export default function MovieList() {
    const [data, setData] = useState([]);
    const { type } = useParams();
    const getData = () => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(function (response) {
                // handle success
                // console.log(response);
                setData(response.data.results);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    };
    useEffect(() => {
        getData();
    }, [type]);
    console.log(data);
    return (
        <div className="movieList">
            <Container>
                <Row>
                    {data.map((item, index) => (
                        <Col sm="6" md="2">
                            <Link to={`/movie/${item.id}`}>
                                <Cards movie={item} key={index} />
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}
