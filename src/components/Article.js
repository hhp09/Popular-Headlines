import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Article.css';

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
       
        
       
                
                    <div className="col-lg-3 col-md-4 col-sm-6">
                            <CardImg top width="100%" src={details.urlToImage} alt="Image" />
                            <CardBody>
                                <CardTitle>{details.title}</CardTitle>
                                <CardText>{details.description}</CardText>
                                <Button href={details.url} target="_blank">Read More</Button>
                            </CardBody>
                    </div>

             
                
          
             
       
    );
};

export default Article;