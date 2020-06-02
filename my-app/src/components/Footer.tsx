import React from 'react'
import {
    Container,
    Grid,
    Header,
    List,
    Segment,
  } from 'semantic-ui-react'

export const Footer = () => {
    return (
        <div>
            <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
               
                <List.Item as='a'>About Us</List.Item>
                <List.Item as='a'>Products</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
            <Header inverted as='h4' content='About' />
              <List link inverted>
               
                <List.Item as='a'>About Us</List.Item>
                <List.Item as='a'>Products</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Our Company 
              </Header>
              <p>
              Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
        </div>
    )
}

export default Footer