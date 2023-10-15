import { CardBody, Card, Button, CardSubtitle, CardTitle, CardText } from "reactstrap";
import "./Card.css";
export default function Cards(props) {
    const { movie } = props;
    return (
        <div className="cards">
            <Card>
                <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} />
                <CardBody>
                    <CardTitle tag="h5">{movie ? movie.original_title : ""}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                        Card subtitle
                    </CardSubtitle>
                    <CardText>{movie ? movie.overview.slice(0, 118) + "..." : ""}.</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </div>
    );
}
