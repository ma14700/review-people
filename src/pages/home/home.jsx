import React, { component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// Immutable数据就是一旦创建，就不能更改的数据。每当对Immutable对象进行修改的时候，就会返回一个新的Immutable对象，以此来保证数据的不可变,
import { is, fromJS } from 'immutable';
//利用prop-types第三方库对组件的props中的变量进行类型检测
import PropTypes from 'prop-types'
import API from '../../api/api';
import envconfig from '../../envconfig/envconfig';

import mixin, { padStr } from '../../utils/mixin';

@mixin({padStr})

class Home extends React.Component{
    render(){
        return(
            <div>123123</div>
        )
    }
}

export default Home;