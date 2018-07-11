import React,{Component} from 'react'
import Content from '../../component/content'
import {Icon,List,Avatar} from 'antd'
import "./index.less"
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
        return <Content rowClass="message">
               <div className="message_header">
                  <div className="message_title">
                      <div className="title_text">
                        <h2>寻找社区日常运营、功能开发、维护 自愿者</h2>
                        <p className="message_news">
                            <span className="user_name">polaris</span>
                            <span className="mgt_r_sm">时间:2017-11-13 12:30:12</span>
                            <span className="mgt_r_sm">浏览次数:1111</span>
                        </p>
                      </div>
                      <img className='user_img' src="http://localhost:8080/static/img.png"/>
                  </div>
                   <div className="message_header_content">
                       本站 2013 年上线以来，得到国内广大 gopher 们的支持，也让我有动力一直开发、维护着。
                       随着 go 越来越流行，学习 go 的人也越来越多，本社区用户量也越来越大，而我个人的精力有限。
                       为了给社区用户提供更好的服务，希望有自愿者加入社区，一起维护、运营本站。招募的自愿者包括：
                   </div>
                   <div className="message_header_footer pointer">
                       <Icon type="star-o" style={{ fontSize: 18}}/>
                         40
                   </div>
               </div>
               <div className="message_content">
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