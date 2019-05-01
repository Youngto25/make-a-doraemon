function writeCode(prefix,code,fn){
  let domCode = document.querySelector('#code');
  let styleTag = document.querySelector('#styleTag');
  let n = 0;
  let timer = setInterval(()=>{
    n += 1;
    domCode.innerHTML = prefix + code.substring(0,n);
    styleTag.innerHTML = prefix + code.substring(0,n);
    domCode.scrollTop = domCode.scrollHeight;
    if(n>=code.length){
      window.clearInterval(timer);
    }
  },5);
};

let code=`/*
*add breath for #code
*/
#code{
  animation: breath 0.5s infinite alternate-reverse;
}
@keyframes breath{
  0%{
    box-shadow: 0 0 10px rgba(0,0,0,1)
  }
  100%{
    box-shadow: 0 0 10px rgba(0,0,0,0.2)
  }
}
/*
*Doraemon's bamboo raft
*/
.cajaovalo {
	width: 100px;
	height: 5px;
	background: transparent;
	margin: 0 auto;
	position: relative;
	margin-bottom: 10px
}
.ovalo {
  width: 100px;
  height: 5px;
  margin: 0 auto;
  background-color: gray;
  border-radius: 5px;
  border: 2px solid gray;
  z-index: 100;
  opacity: 0.6; 
  position: absolute;
  top: 5px;
  animation-name: rotar;
  animation-duration: .1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
/*
*bamboo raft action
*/
@keyframes rotar {
    from{transform:rotate3D(0,1,0,0deg);}
    to{transform:rotate3D(0,1,0,360deg);}
}
.semi-circulo {
    width: 20px; 
    height: 10px; 
    display: block;
    border: 2px solid #555; 
    background: #BD8D22;
    border-radius: 100px 100px 0 0;
    position: absolute; 
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    z-index: 2;
 }
.palo {
	width: 7px;
	height: 30px;
  z-index: 1;
	background: #FCC136;
  position: relative;
  top: 7px;
	border: 2px solid black;
	margin: 0 auto;
}
/*
*Doraemon's head
*/
.head{
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background: #35A1C9;
  position: absolute;
  right: 40px;
  top: 15px;
  border: 2px solid black;
  overflow: hidden;
  z-index: 100;
  margin: 0 auto;
}
/*
*Doraemon's face
*/
.face{
  height: 170px;
  width: 170px;
  border-radius: 50%;
  background: white;
  position: absolute;
  top: 14px;
  left: 14px;
  border: 2px solid black;
}
/*
*Doraemon's eyes
*/
.eye{
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 1px solid black;
  position: absolute;
  background: white;
}
.eye.left{
  right: 50%;
}
.eye.right{
  left: 50%;
}
/*
*Doraemon's eyeballs
*/
.eyeball{
  height: 20px;
  width: 15px;
  border-radius: 10px/12px;
  position: absolute;
  border: 6px solid black;
}
.eyeball.left{
  right: 50%;
  transform: translateX(-50%);
  top: 20px;
}
.eyeball.right{
  left: 50%;
  transform: translateX(50%);
  top: 20px;
}
/*
*Doraemon's nose
*/
.nose{
  width: 32px;
  height: 32px;
  background:#B11735;
  border-radius: 50%;
  border: 1px solid black;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 40px;
}
.nose::after{
  content: '';
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: white;
  position: absolute;
  left: 5px;
  top: 5px;
}
/*
*Doraemon's beard
*/
.beard1{
  width: 60px;
  height: 2px;
  border: 1px solid black;
  position: absolute;
  top: 50px;
}
.beard1.left{
  right: 50%;
  transform: translateX(-22px) rotate(15deg);
}
.beard1.right{
  left: 50%;
  transform: translateX(22px)rotate(-15deg);
}
.beard2{
  width: 60px;
  height: 2px;
  border: 1px solid black;
  position: absolute;
  top: 65px;
}
.beard2.left{
  right: 50%;
  transform: translateX(-22px);
}
.beard2.right{
  left: 50%;
  transform: translateX(22px);
}
.beard3{
  width: 60px;
  height: 2px;
  border: 1px solid black;
  position: absolute;
  top: 75px;
}
.beard3.left{
  right: 50%;
  transform: translateX(-22px) rotate(-10deg);
}
.beard3.right{
  left: 50%;
  transform: translateX(22px) rotate(10deg);
}
.among-people{
  height: 20px;
  width: 2px;
  border: 1px solid black;
  position: absolute;
  top: 71px;
  left: 50%;
  transform: translateX(-50%);
}
/*
*Doraemon's mouth
*/
.mouth{
  width: 140px;
  height: 70px;
  border-radius: 0 0 140px 140px;
  background: #B11635;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 91px;
  overflow: hidden;
}
.mouth::before{
  content: '';
  display: block;
  width: 50px;
  height: 80px;
  background: #ca2533;
  border-radius: 25px;
  position: absolute;
  left: 20px;
  top: 25px;
}
.mouth::after{
  content: '';
  display: block;
  width: 50px;
  height: 80px;
  background: #ca2533;
  border-radius: 25px;
  position: absolute;
  right: 20px;
  top: 25px;
}
/*
*Doraemon's hand
*/
.hand{
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: white;
  border: 2px solid black;
  position: absolute;
  top: 125px;
}
.hand.left{
  margin-left: 6px;
}
.hand.right{
  right: 0;
  margin-right: 6px;
}
/*
*Doraemon's arm
*/
.arm{
  width: 50px;
  height: 80px;
  border: 2px solid black;
  border-radius: 50px/80px;
  background: #35A1C9;
  position: absolute;
  top: 150px;
  z-index: -1;
}
.arm.left{
  margin-left: 50px;
  transform: rotate(-55deg);
}
.arm.right{
  right: 0;
  margin-right: 50px;
  transform: rotate(55deg);
}
/*
*Doraemon's trunk
*/
.trunk{
  width: 142px;
  height: 172px;
  background: #35A1C9;
  border: 2px solid black;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 105px;
  z-index: -2;
}
.trunk::after{
  content: '';
  display: block;
  height: 50px;
  width: 90px;
  background: white;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 110px;
  border-radius: 90px/50px;
}
/*
*Doraemon's pocket
*/
.pocket{
  width: 50px;
  height: 25px;
  border-radius: 0 0 50px 50px;
  border: 2px solid black;
  background: white;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 238px;
}
/*
*Doraemon's scarf
*/
.scarf{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #A1172E;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 125px;
}
/*
*Doraemon's bell
*/
.bell{
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: #F19629;
  border: 2px solid black;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 214px;
}
.hole{
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: black;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 15px;
}
.horizontal{
  width: 16px;
  height: 2px;
  border-radius: 50%;
  border: 1px solid black;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 23px;
}
/*
*Doraemon's leg
*/
.leg{
  width: 50px;
  height: 80px;
  background: white;
  border: 2px solid black;
  position: absolute;
  bottom: 15px;
  border-radius: 50px/70px;
  z-index: -3;
}
.leg.left{
  right: 50%;
  transform: rotate(8deg);
  margin-right: -2px;
}
.leg.right{
  left: 50%;
  transform: rotate(-8deg);
  margin-left: -2px;
}
/*
*Doraemon flying
*/
.container{
  animation-name: trans;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
@keyframes trans{
  0%{margin-top: 0px;}
  25%{margin-top: 0px;}
  50%{margin-top: 50px;}
  75%{margin-top: 50px;}
  100%{margin-top: 0px;}
}
Thank you.
`;

writeCode('',code);