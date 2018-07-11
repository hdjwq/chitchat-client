import React,{Component} from 'react'
import {Row,Col} from 'antd'
import PropTypes from 'prop-types'
class Index extends Component{
    static propTypes={
           rowClass:PropTypes.string,
           colClass:PropTypes.string
    };
    static defaultProps={
           rowClass:"",
           colClass:""
    };
    render(){
        const {rowClass,colClass}=this.props;
        return <Row className={`${rowClass} full_flex`}>
            <Col span={20} offset={2} className={`${colClass} full_flex`}>
                {this.props.children}
            </Col>
        </Row>
    }
}

export default Index