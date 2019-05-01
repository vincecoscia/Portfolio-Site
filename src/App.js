import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import ContactUs from './components/contactus/contactus';
import Footer from './components/footer/footer';
import resumeData from './resumeData';
import { PacmanLoader } from 'react-spinners'
class App extends Component {
  state = {
    loading: true
  }

  componentDidMount() {
    this.setState({ loading: false })
  }


  render() {

    return (
      <React.Fragment>

        {this.state.loading ?
        <div className="flex">
          <PacmanLoader color="yellow" size={70} loading={this.state.loading} />
        </div>
        :
        <div className="App">
          <div>
          <Header resumeData={resumeData} />
          <Portfolio resumeData={resumeData}/>
          <About resumeData={resumeData}/>
          <Resume resumeData={resumeData}/>
          <ContactUs resumeData={resumeData}/>
          <Footer resumeData={resumeData}/>
          </div>
        </div>}
      </React.Fragment>
    );
  }

}

export default App;
