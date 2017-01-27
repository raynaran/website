import React from 'react';
import {
    Card,
    CardActions,
    CardMedia,
    CardTitle,
    CardText
}
from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default () => (
    <div className="my-tab">
        <Card>
            <CardMedia>
                <img src="http://sigapp.cs.purdue.edu/static/media/laundryicon.86fe0c06.png" />
            </CardMedia>
            <CardTitle title="Purdue Laundry" subtitle="For doing laundry the right way" />
            <CardText>
                The Purdue Laundry app shows the details of your dorm's laundry 
                room in the palm of your hand! You can even set timers for each 
                machine you are using to be alerted when they are done.
            </CardText>
            <CardActions>
                <FlatButton label="Play Store" />
                <FlatButton label="App Store" />
            </CardActions>
        </Card>
    </div>
);
