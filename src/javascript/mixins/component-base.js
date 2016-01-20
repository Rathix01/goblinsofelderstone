var React = require('react');
var Bacon = require('baconjs');
var R = require('ramda');
var StateStore = require('../stores/state-store');
var Actions = require( "../actions/action-manager" );

var componentBase = {

    componentWillMount: function() {
        this.unsubscribe = StateStore.currentState.onValue( this.onNextState );
    },

    componentWillUnmount: function() {
        this.unsubscribe();
    },

    hasSameNumberOfProperties: function( nextState ) {
        return R.keys( this.state ).length === R.keys( nextState ).length
    },

    hasEqualProperties: function( currentState, nextState ) {
        return R.map( this.compareProperty.bind( this, currentState, nextState ), R.keys( nextState ) )
    },

    compareProperty: function( currentState, nextState, key ) {
        return R.eq( currentState[key], nextState[ key ] );
    },

    // I tried R.equals, and R.eqDeep. None of them would reliably compare
    // two objects correctly, so wrote this. Please discuss with Tim before changing.

    shouldComponentUpdate: function(nextProps, nextState) {
        if( this.hasSameNumberOfProperties( nextState ) ) {
            if( R.contains( false, this.hasEqualProperties( this.state, nextState ) ) ) return true
            else return false;
        }

        if( R.eqDeep( this.state, nextState ) ) {
            return false 
        }

        return true
    },

    onNextState: function ( nextState ) {

        if( this.state === undefined ) return false

        var oldState = this.state;
        var newState = nextState[ this.props.id ];

        if( this.beforeNextState ) this.beforeNextState( oldState, newState, this.setNextState.bind( this, oldState, newState ) );
        else this.setNextState( oldState, newState );
    },

    setNextState: function ( oldState, newState ) {

        if( !R.eqDeep( newState, this.state ) && newState !== undefined ) {
          this.setState( newState );
        }

        if( this.afterNextState ) this.afterNextState( oldState, newState );
    },

    publishState: function() {
        Actions.actionBus.push( R.merge( this.state, { actionKey: this.props.id } ) );
    }
}

module.exports = componentBase;