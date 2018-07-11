import React,{Component} from 'react'
import {Input,Row,Col,Modal} from 'antd'
import {Switch,Route,Redirect} from 'react-router-dom'
import "./index.less"
import route from "../router"
import ModalForm from '../component/accountForm/index'
const Search = Input.Search;
class Index extends Component{
    state={
        visible:false,
        title:""
    };
    show=(title)=>{
        this.setState({
            visible: true,
            title,
        });
    };
    handleCancel=()=>{
      this.setState({visible:false})
    };
    render(){
        const {title,visible}=this.state;
        return <div className="index full_flex">
            <Row className="index_header">
                <Col span={18} offset={3}>
                    <Search
                        placeholder="搜索"
                        onSearch={value => console.log(value)}
                        style={{ width: 288 }}
                    />
                    <div className='btn_box'>
                        <span className='nav_btn' onClick={()=>{
                            this.show("登录")
                        }}>
                          登录
                        </span>
                        <span className='nav_btn' onClick={()=>{
                            this.show('注册')
                        }}>
                          注册
                        </span>
                    </div>
                </Col>
            </Row>
            <div className="index_content full_flex">
                <Switch>
                    <Route path="/" exact={true} component={()=>{
                        return <Redirect to="/index"/>
                    }}/>
                    {route.map((item,i)=>{
                        return <Route {...item} key={item.path}/>
                    })}
                </Switch>
            </div>
            <Modal
                title={title}
                visible={visible}
                onCancel={this.handleCancel}
                footer={null}
                width={300}
            >
               <ModalForm/>
            </Modal>
        </div>
    }
}

export default Index