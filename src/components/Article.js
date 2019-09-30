import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Button
} from 'reactstrap';
import { Grid, Row, Col} from 'react-flexbox-grid';

const Article = (props) => {
    const { details } = props;

    return (
       <div className = "card-block"> 
        <Grid fluid>
            <Row>
                <Col xs={3} md={4}>

                    <Card className="card-deck">
                            <CardImg top width="100%" src={details.urlToImage} alt="Image" />
                            <CardBody>
                                <CardTitle>{details.title}</CardTitle>
                                <CardText>{details.description}</CardText>
                                <Button href={details.url} target="_blank">Read More</Button>
                            </CardBody>
                    </Card>
                </Col> 
           </Row>  
        </Grid>      
       </div> 
    );
};

export default Article;