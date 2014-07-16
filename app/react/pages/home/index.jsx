/** @jsx React.DOM */
var React = require('react');
var IScroll = require('../../components/iscroll');
var __ = require('../../i18n')._;
var Navigation = require('./components/nav');
var Ipsum = require('../../components/ipsum');


module.exports = React.createClass({
  componentDidMount: function(){
    this.props.setPageTitle(__('app.name'))
  },
  render: function(){
    return (
      <div>
      {this.realRender()}
      </div>
      );
  },
  realRender: function(){ 
    if( !this.props.user.isAuth() ){
      return this.renderGuest();
    }
    return (
      <div>
      <Navigation />
      <IScroll>
      <Ipsum paragraphs={10} />
      </IScroll>
      </div>
      );
},
renderGuest: function(){
  return(
    <IScroll>
    <div className="text-center">
    <h3>{__('welcome')}</h3>
    <a href="/#login" className="btn btn-success btn-lg" style={{width: '80%', margin: 30}}>{__('login')}</a>
    <br />
    <a href="/#signup" className="btn btn-primary btn-lg" style={{width: '80%', margin: 30}}>{__('signup')}</a>
    </div>
    </IScroll>
    );
}

});