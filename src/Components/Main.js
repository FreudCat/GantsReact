import React, { Component } from "react";
import { Switch, Redirect, Route, withRouter } from "react-router-dom";
import Home from "./Home"; 
import About from "./About"; 
import Services from "./Services"; 
import Header from "./Header"; 
import Team from "./Team"; 
import Contact from "./Contact"; 
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Sidenav from "./SideNav";

const pages = [
  { path: "/", name: "home", order: 1 },
  { path: "/about", name: "about", order: 2 },
  { path: "/team", name: "team", order: 3 }, 
  { path: "/services", name: "services", order: 4 }, 
  { path: "/contact", name: "contact", order: 5 }, 
  { path: "/home", name: "home", order: 6} //need this last path so because curPageOrder sometimes is undefined if path is "/" versus "home"
];

console.log(pages)

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: this.setPage(this.props.location.pathname),
      curPageOrder: this.setCurrentOrder(this.props.location.pathname),
      newPageOrder: null
    };
  }
  componentDidUpdate(prevProps, prevState) {

    let newPage = this.setPage(this.props.location.pathname);
    let newPageOrder = pages.filter(function(page) {
      console.log(page.name);
      console.log(newPage);
      return page.name === newPage;
    });

    let curPage = this.state.currentPage;
    let curPageOrder = pages.filter(function(page) {
      console.log(curPage);
      console.log(page.name === curPage);
      return page.name === curPage;
    });

    if (newPage !== curPage) {
      console.log("new page");
      let direction =
        curPageOrder[0].order < newPageOrder[0].order ? "up" : "down"; //depending on order, slides page up or down
      // Set State
      this.setState({
        currentPage: newPage,
        pageDirection: direction,
        curPageOrder: curPageOrder[0].order,
        newPageOrder: newPageOrder[0].order
      });
    }
  }
  setCurrentOrder = path => {
    let curPageOrder = pages.filter(function(page) {
      return console.log(page.path === path), console.log(page.path+"page.path"), console.log(path +" path"), page.path === path; //filters to find the one time when page.path===path is true and puts it into and array called curpageorder
    });

		return console.log(curPageOrder[0].order), curPageOrder[0].order; //populates an array from the .filter function, takes ONLY the one "true" object and finds the order of the true object 
  };

  setPage = pathname => {
    // SET PAGE FOR CSS CLASSES
    let page = null;
    switch (pathname) {
      case "/":
        page = "home";
        break;
      case "/about":
        page = "about";
        break;
        case "/team":
        page = "team";
        break;
        case "/services":
          page = "services";
          break;
        case "/contact":
        page = "contact";
        break;
      default:
        page = "home";
    }

    return page;
  };
  render() {
    const { location } = this.props;
    const currentKey = location.pathname.split("/")[1] || "/"; //splits the location into its parts (/about becomes / and about, with about being in positon 1)
    console.log("current Key: " +currentKey);

    return (
      <React.Fragment>

        <Header/> 
      
        <div className="d-none d-md-block">
        <Sidenav />
        </div>
<div className="d-none d-md-block">
      <div className={`wrapper ${this.setPage(this.props.location.pathname)}`}>
        
        <div className={`wrap ${currentKey} `}>
          <TransitionGroup
            className={`transition-group ${this.state.pageDirection}`}
          >
            {console.log("transition-group" + this.state.pageDirection)}
            <CSSTransition
              key={currentKey}
              timeout={{ enter: 800, exit: 400 }}
              classNames={"transition-wrap"}
            >
              <section className={`route-section fade`}>
                <Switch location={location}>
                  <Route exact path="/" component={() => <Home />} />
                  <Route path="/about" component={()=><About />}/>
                  <Route path="/services" component={() => <Services />} />
                  <Route path="/contact" component={() => <Contact />} />
                  {console.log(location)}
                </Switch>
              </section>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
      </div>
      <div className="d-block d-md-none">
        <Home />
        <About />
        <Services />
        <Contact />
      </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Main);

