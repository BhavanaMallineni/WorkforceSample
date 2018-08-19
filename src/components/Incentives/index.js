import React from 'react';
import PropTypes from 'prop-types';
import IncentiveTable  from './IncentiveTable';

class Incentives extends React.Component {
    constructor(props){
      super(props);
      this.state = {

      };
    }
      render(){
          return(<div>
            <IncentiveTable />
            </div>);
      }
}


Incentives.propTypes = {
  
};

export default Incentives;
