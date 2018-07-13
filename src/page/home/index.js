import React,{Component} from 'react'
import {List,Avatar,Menu} from 'antd';
import './index.less'
import Content from '../../component/content'
import {connect} from "react-redux"
import {INFO} from '../../actionTypes/action'
const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
    {
        title: 'Ant Design Title 4',
    },
    {
        title: 'Ant Design Title 4',
    }
];
const states=()=>({
      yy:""
});
const dispatchFn=(dispath)=>({
      test(){
          dispath({
             type:INFO,
             key:"login",
             params:{name:"test"}
          })
      }
});
@connect(states,dispatchFn)
class Index extends Component{
    state = {
        current: 'all',
    };
    componentWillMount(){
        this.props.test();
    }
    handleClick=(e)=>{
         this.setState({
             current:e.key
         })
    };
    render(){
        return <Content rowClass="home" colClass="home_body">
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
                className="tab_nav"
            >
                <Menu.Item key="all">
                    全部
                </Menu.Item>
                <Menu.Item key="hot">
                    热门
                </Menu.Item>
                <Menu.Item key="mine">
                    我的
                </Menu.Item>
            </Menu>
            <div className="index_content">
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                        <List.Item className="pointer">
                            <List.Item.Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title={<a href="https://ant.design">{item.title}</a>}
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                        </List.Item>
                    )}
                />
            </div>
        </Content>;
    }
}

export default Index