// const cart=['shoes','pants','pen']
 
// callback 

createOrder(cart,function(orderID){
    proceedTopayment(orderID);
})
  
  // // Promise
  
  // const promise=createOrder(cart);
  
  // // {data,undefined};
  
  
  // promise.then(function(orderID){
  //   proceedTopayment(orderID);
  // });
  
  
  const product='https://fakestoreapi.com/products/1'
  const user=fetch(product);
  user.then(function(data){
      console.log(data);
  })
  
  
  // issuse in call back hell
  
  createOrder(cart,function(orderID){
      proceedTopayment(orderID,function(){
        
       giveMetheOrderSummary(summary,function(){
            UpdatetheWaller();
           
       });
      });
    })
    
  
  // Promise chaining
  
  createOrder(cart)
  .then(fucntion(OrderID){
     return  proceedToPayment(orderID);
  })
  .then(function(paymentInfo){
      return showMeSummaryOforder(paymentInfo);
  })
  .then(function(updatedBalanced){
      return updatedBalanced(updatedBalanced);
  })
  
  
  createOrder(cart)
  .then((OrderID) =>  proceedToPayment(orderID))
  .then((paymentInfo) => showMeSummaryOforder(paymentInfo))
  .then((updatedBalanced) =>updatedBalanced(updatedBalanced));
  
  
  
  
  // to create a Promise
  
  
  function createPromise(cart){
      function pr(){
          const promise=new Promise(function(resolve, reject){
              if(isValidate(cart)){
                  const orderID="098";
                  resolve(orderID);
              }
  
              // creating an Error
              if(!isValidate(cart)){
                  const error=new Error(`i am not valid ID number`);
                  reject(error);
              }
          })
      }
      return pr;
  }