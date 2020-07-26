import React, { Component } from 'react';
import './App.css'
import axios from 'axios'
import List from './components/List';
import Info from './components/Info';
import Forms from './components/Form';
import Footer from './components/Footer';
import Loader from 'react-loader-spinner'
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from 'react-bootstrap/Container'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"



class App extends Component {

  state = {
    loading: false,
    titleImg: '',
    images: [],
    info: [],
    form: {
      fields: [],
      button: ''
    }
  }

  async componentDidMount() {
    try {
      const respnose = await axios.get('https://next.json-generator.com/api/json/get/4J5rAlllY')
      const data = respnose.data
      this.setState({
        titleImg: data.components[0].metadata.title,
        images: data.components[0].metadata.images,
        info: data.components[1].metadata.components,
        form: data.form,
        fields: data.form.fields,
        button: data.form.submit_button.text,
        loading: true
      })

    } catch (e) {
      console.log(e);
    }
  }


  render() {
    if (this.state.loading === false ) {
      return (
            
        <Loader className="loader"
         type="Ball-Triangle"
         color=" #78CEBF"
         height={100}
         width={100}

      />
      )
    }
    return (
      <div>
    
        <Container className="App">

          <List items={this.state.images}
            titleImg={this.state.titleImg}>
          </List>

          <Info info={this.state.info} />
          <Forms form={this.state.form}
            fields={this.state.form.fields}
            button={this.state.button} />
        </Container>
          <Footer></Footer>
      </div>
    );
  }
}

export default App;
