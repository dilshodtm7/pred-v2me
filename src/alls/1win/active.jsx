import React, { useEffect } from "react";
import Avia from "../../assets/avi.png";
import Rocket from "../../assets/796987.png";
import Jet from "../../assets/Lucky-Jet.jpg";
import "./index.css";

const indexactive = () => {
setTimeout(function run() {
    if(localStorage.getItem('token')){
        document.getElementById('lucky').textContent = 1.24;  
      }
    } , 1000)
    setTimeout(function run() {
      if(localStorage.getItem('token')){
          document.getElementById('lucky').textContent = 13.98;  
        }
      } ,14000)
      setTimeout(function run() {
        if(localStorage.getItem('token')){
            document.getElementById('lucky').textContent = 1.37;  
          }
        } , 56000)
        setTimeout(function run() {
          if(localStorage.getItem('token')){
              document.getElementById('lucky').textContent = 13.78;  
            }
          } , 70000)
          setTimeout(function run() {
            if(localStorage.getItem('token')){
                document.getElementById('lucky').textContent = 1.25;  
             }
            } , 112000)
setTimeout(function run() {
            if(localStorage.getItem('token')){
                document.getElementById('lucky').textContent = 1.14 ;  
              }
            } , 125000)
            
            
  setTimeout(function run() {
            if(localStorage.getItem('token')){
                document.getElementById('lucky').textContent = 1.03;  
              }
            } , 138000)
            
            setTimeout(function run() {
    if(localStorage.getItem('token')){
        document.getElementById('lucky').textContent = 1.77;  
      }
    } , 149000)
    setTimeout(function run() {
      if(localStorage.getItem('token')){
          document.getElementById('lucky').textContent = 1.70;  
        }
      } ,1820000)
      setTimeout(function run() {
        if(localStorage.getItem('token')){
            document.getElementById('lucky').textContent = 1.80;  
          }
        } , 1990000)
        setTimeout(function run() {
          if(localStorage.getItem('token')){
              document.getElementById('lucky').textContent = 5.19;  
            }
          } , 2107000)
          setTimeout(function run() {
            if(localStorage.getItem('token')){
                document.getElementById('lucky').textContent = 1.03;  
              }
            } , 2407000)




 setTimeout(function run() {
    if(localStorage.getItem('token')){
        document.getElementById('lucky').textContent =1;  
      }
    } , 2580000)
    setTimeout(function run() {
      if(localStorage.getItem('token')){
          document.getElementById('lucky').textContent = 4.25;  
        }
      } ,3800000)
      setTimeout(function run() {
        if(localStorage.getItem('token')){
            document.getElementById('lucky').textContent = 2.04;  
          }
        } , 4080000)
        setTimeout(function run() {
          if(localStorage.getItem('token')){
              document.getElementById('lucky').textContent = 2.25;  
            }
          } , 4270000)
          setTimeout(function run() {
            if(localStorage.getItem('token')){
                document.getElementById('lucky').textContent = 11.38;  
              }
            } , 4480000)
setTimeout(function run() {
            if(localStorage.getItem('token')){
                document.getElementById('lucky').textContent = 7.48 ;  
              }
            } , 3600000)
            
            
  setTimeout(function run() {
            if(localStorage.getItem('token')){
                document.getElementById('lucky').textContent = 1.68;  
              }
            } , 3940000)
            
            setTimeout(function run() {
    if(localStorage.getItem('token')){
        document.getElementById('lucky').textContent = 2.61;  
      }
    } , 4110000)
    setTimeout(function run() {
      if(localStorage.getItem('token')){
          document.getElementById('lucky').textContent = 1.34;  
        }
      } ,4330000)
      setTimeout(function run() {
        if(localStorage.getItem('token')){
            document.getElementById('lucky').textContent = 2.97;  
          }
        } , 4480000)
        setTimeout(function run() {
          if(localStorage.getItem('token')){
              document.getElementById('lucky').textContent = 1.08;  
            }
          } , 4710000)
          setTimeout(function run() {
            if(localStorage.getItem('token')){
                document.getElementById('lucky').textContent = 1.27;  
              }
            } , 4830000)
            
            
            
            setTimeout(function run() {
            if(localStorage.getItem('token')){
                document.getElementById('lucky').textContent = 1.85;  
              }
            } , 4970000)
            
            setTimeout(function run() {
    if(localStorage.getItem('token')){
        document.getElementById('lucky').textContent = 1;  
      }
    } , 5150000)
    setTimeout(function run() {
      if(localStorage.getItem('token')){
          document.getElementById('lucky').textContent = 1.53;  
        }
      } ,5260000)
      setTimeout(function run() {
        if(localStorage.getItem('token')){
            document.getElementById('lucky').textContent = 3.90;  
          }
        } , 5420000)
        setTimeout(function run() {
          if(localStorage.getItem('token')){
              document.getElementById('lucky').textContent = 1.15;  
            }
          } , 5720000)
          setTimeout(function run() {
            if(localStorage.getItem('token')){
                document.getElementById('lucky').textContent = 4.66;  
              }
            } , 5820000)




 setTimeout(function run() {
    if(localStorage.getItem('token')){
        document.getElementById('lucky').textContent = 1.66 ;  
      }
    } , 6160000)
    setTimeout(function run() {
      if(localStorage.getItem('token')){
          document.getElementById('lucky').textContent = 1.03;  
        }
      } ,6360000)
      setTimeout(function run() {
        if(localStorage.getItem('token')){
            document.getElementById('lucky').textContent = 1.04;  
          }
        } , 6430000)
        setTimeout(function run() {
          if(localStorage.getItem('token')){
              document.getElementById('lucky').textContent = 5.47;  
            }
          } , 6610000)
          setTimeout(function run() {
            if(localStorage.getItem('token')){
                document.getElementById('lucky').textContent = 1;  
              }
            } , 3490000)
setTimeout(function run() {
            if(localStorage.getItem('token')){
                document.getElementById('lucky').textContent = 7.48 ;  
              }
            } , 3600000)
  const imageMap = {
    Avia: Avia,
    Jet: Jet,
    Rocket: Rocket,
  };
  const Image = localStorage.getItem("image");
  const imgSrc = imageMap[Image] || Rocket;

  return (
    <>
      <div className="container-avia">
        <div className="loader">
          <img src={imgSrc} className="jets" alt="" />
          <div className="plane">
            
            <img src="https://zupimages.net/up/19/34/4820.gif" className="plane-img" className="plane-img"/>
          </div>
          <div className="earth-wrapper">
            <h3 className="lucky-text" id="lucky">
              Wait
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};
export default indexactive;
