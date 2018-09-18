import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import LibraryCourse from './libraryCourse';

class Library extends Component {

    componentWillMount() {
        this.props.fetchCourses()
    }

    rednerCourses(){
        const data = this.props.courses

        return data.map(course => {
            return <LibraryCourse/>
    }

    render() {

        return (
            <div className="library">
                <h1 className="library__title">Course Library</h1>
                { this.renderCourses() }
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        courses: state.courses
    }
}
export default connect(mapStateToProps, actions)(Library);