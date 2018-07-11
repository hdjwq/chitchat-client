import React,{Component} from 'react'
import Content from '../../component/content'
import HeaderImg from '../../component/headerImg'
import {List,Avatar} from 'antd'
import './index.less'
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
class Index extends Component{
    render(){
        return <Content rowClass="user">
               <div className="user_header">
                 <ul className="user_info">
                     <li className="row">
                         用户名:hdj
                     </li>
                     <li className="row">
                         发帖数:
                     </li>
                     <li className="row">
                         注册时间:
                     </li>
                 </ul>
                   <div className="user_img_box">
                       <HeaderImg src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                  boxStyle={{width:"94px",height:"94px"}}
                                  imgStyle={{width:"94px"}}/>
                   </div>
               </div>
            <div className="user_content">
               <h3>他的帖子</h3>
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
        </Content>
    }
}

export default Index