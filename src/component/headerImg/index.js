import React,{Component} from 'react'
import PropTypes from 'prop-types'
import './index.less'
const {string,object}=PropTypes;
class Index extends Component{
     static propTypes={
            src:string,
            boxStyle:object,
            imgStyle:object
     };
     static defaultProps={
            src:"",
            boxStyle:{width:"60px",height:"60px"},
            imgStyle:{width:"60px"}
     };
     render(){
         const {src,boxStyle,imgStyle}=this.props;
         return <div className="header_img_box" style={boxStyle}>
             <img src={src} className="header_img" style={imgStyle}/>
         </div>
     }
}

export default Index