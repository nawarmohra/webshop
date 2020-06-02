import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import ShareIcon from '@material-ui/icons/Share';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

  const SingleProduct = (props: { avatarSrc: string; title: string; subtitle: string; descrption: Text; imgSrc: string; })  => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const { avatarSrc, title, subtitle, descrption, imgSrc} = props;
  
    return (
        <Card >
            <CardHeader
            avatar={ <Avatar src ={avatarSrc}/>}
            action={
            <IconButton aria-label="settings">
                <ShareIcon />
            </IconButton>
            }
            title={title}
            subheader={subtitle}
        />
        <CardMedia 
        image="https://www.junkyard.se/media/catalog/product/930x/9/2/923841.jpg"
        />
      </Card>
    );
  }

  export default SingleProduct