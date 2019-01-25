

const validationHandler = (config) => (req, res, next) => {




const e =Object.entries(config)[0][1];

console.log('entries',Object.entries(e)[0][1]);

if(Object.entries(e)[0][1]== true){
  console.log("hi");
}
next();}



export default validationHandler;
