

export default (state,action)=>{
       const {type}=action;
       switch(type){
           case "test":
              return {name:"hdj"};
           default:
              return {name:"default"};
       }
}