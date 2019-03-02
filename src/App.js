import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();

    
  }

  render() {
    const {
        Header, Footer, Content
      } = Layout;
    return (

        <Layout>
          <Header>Alex's Challenge</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
    
    );
  }
}

export default App;
