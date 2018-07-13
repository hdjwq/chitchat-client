import fetch from './fetch'
const data={
     login:{url:"/login"},
};
class Index extends fetch{
     constructor(){
         super(data)
     }
}
const info=new Index();
info.make();
export default info
