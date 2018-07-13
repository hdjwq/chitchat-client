import axios from "axios"
import qs from 'qs';
import config from '../config'
const {proxy}=config;
class Index  {
      constructor(data){
          this.data=data;
      }
      config({url,headers,data,method,responseType}){
           const path=proxy+url;
           const configs={
                url:path,
                headers,
                method,
                responseType
           };
           if (method==="POST"){
               configs.data=qs.stringify(data)
           }else{
               configs.params=data;
           }
           return configs
      }
      fetch({url,data,header,method="POST",responseType="json"}){
            let headers={
                'content-type': 'application/x-www-form-urlencoded',
                "cache-control":"no-cache",
                "accept-language":"zh-CN",
            };
            headers=header?Object.assign(headers,header):headers;
            const config=this.config({url,data,headers,method,responseType});
            return new Promise((cg,sb)=>{
                  axios(config)
                      .then((req)=>{
                        cg()
                      })
                      .catch((err)=>{
                        cg()
                      })
            })
      }
      make(){
          Object.keys(this.data).map((item,i)=>{
              this[item]=(data)=>{
                  return this.fetch(Object.assign({},this.data[item],data));
              }
          })
      }
}


export default Index