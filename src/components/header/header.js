import React, { Component } from 'react';

export default class Header extends Component {

  componentDidMount() {
    let OPT = {
      selector: "#sparks",
      amount: 5000,
      speed: 0.05, // pixels per frame
      lifetime: 200,
      direction: { x: -0.5, y: 1 },
      size: [2, 2],
      maxopacity: 1,
      color: "150, 150, 150",
      randColor: true,
      acceleration: [5, 40]
    }

    if (window.innerWidth < 520) {
      OPT.speed = 0.05;
      OPT.color = "150, 150, 150";
    }

    (function spark() {
      const canvas = document.querySelector(OPT.selector);
      const ctx = canvas.getContext("2d");

      let sparks = [];

      window.addEventListener('resize', () => {
        setCanvasWidth()
      });

      function setCanvasWidth() {
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
      }

      function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      // Init animation
      function init() {
        setCanvasWidth();

        window.setInterval(() => {
          if (sparks.length < OPT.amount) {
            addSpark();
          }
        }, 1000 / OPT.amount);

        window.requestAnimationFrame(draw);
      }

      function draw() {
        ctx.fillStyle = 'rgba(0,0,0, 0.1)';
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        sparks.forEach((spark, i, array) => {

          if (spark.opacity <= 0) {
            array.splice(i, 1);
          } else {
            drawSpark(spark);
          }

        });

        window.requestAnimationFrame(draw);
      }

      function Spark(x, y) {
        this.x = x;
        this.y = y;
        this.age = 0;
        this.acceleration = rand(OPT.acceleration[0], OPT.acceleration[1]);

        this.color = OPT.randColor
          ? rand(0, 255) + "," + rand(0, 255) + "," + rand(0, 255)
          : OPT.color

        this.opacity = OPT.maxopacity - this.age / (OPT.lifetime * rand(1, 10));

        this.go = function () {
          this.x += OPT.speed * OPT.direction.x * this.acceleration / 2
          this.y += OPT.speed * OPT.direction.y * this.acceleration / 2

          this.opacity = OPT.maxopacity - ++this.age / OPT.lifetime;
        }
      }

      function addSpark() {
        let x = rand(-200, window.innerWidth + 200);
        let y = rand(-200, window.innerHeight + 200);
        sparks.push(new Spark(x, y));
      }

      function drawSpark(spark) {
        let x = spark.x, y = spark.y;

        spark.go();

        ctx.beginPath();
        ctx.fillStyle = `rgba(${spark.color}, ${spark.opacity})`;
        ctx.rect(x, y, OPT.size[0], OPT.size[1], 0, 0, Math.PI * 2);
        ctx.fill();
      }

      init();
    })();
  }


  render() {

    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      {/*generated code*/}
      <header id="home">
        <canvas id="sparks" />
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav transition">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#portfolio">Works</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
               <li><a className="smoothscroll" href="#resume">Resume</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav>
         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">Hi, I'm {resumeData.name}.</h1>
               <h3 className="resp-head">I'm a {resumeData.role}.{resumeData.roleDescription}
               </h3>
               <hr/>
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}
