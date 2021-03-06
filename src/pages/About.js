import React, { memo} from 'react';
import Layouts from '../components/Layouts';
import pp from '../images/profile.png';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormattedMessage } from "react-intl";




const About = () => {
    return (
      <Layouts>
        <div className="jumbotron">
          <h1 className="display-4">AVA<small class="text-muted">project</small></h1>
          <p className="lead"><FormattedMessage  id="about_message" 
             values={{u: (...chunks) => (
                        <u>
                          {chunks}
                        </u>)}}
                  >
          </FormattedMessage></p>

          <br></br>
          <h4><FormattedMessage id="used_techs"/></h4>
          <ul>
            <li><a href="https://tr.reactjs.org" target="_blank" rel="noopener noreferrer">ReactJS</a></li>
            <li><a href="https://github.com/NovelCOVID/API" target="_blank" rel="noopener noreferrer">Covel Novid API</a> - <FormattedMessage id="data_service"/></li>
            <li><a href="https://react-bootstrap.github.io" target="_blank" rel="noopener noreferrer">React Bootstrap</a> - <FormattedMessage id="ui_library"/></li>
            <li><a href="https://github.com/react-bootstrap-table/react-bootstrap-table2" target="_blank" rel="noopener noreferrer">Bootstrap Table</a> - <FormattedMessage id="ui_library"/></li>
            <li><a href="https://www.react-simple-maps.io" target="_blank" rel="noopener noreferrer">React Simple Maps</a> - <FormattedMessage id="ui_library"/></li>
          </ul>
          <br/>

    		<div class="d-flex justify-content-center">
    		    <div class="card profile-card-3">
    		        <div class="background-block">
    		            <img src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="profile-sample1" class="background"/>
    		        </div>
    		        <div class="profile-thumb-block">
    		            <img src={pp} alt="profile" class="profile"/>
    		        </div>
    		        <div class="card-content">
                    <h2>SE Project<small> <FormattedMessage id="soft_eng"/></small></h2>
                    <div class="icon-block">
                        <a href="https://www.linkedin.com/in/vaibhavnirmal2001/"><i><FontAwesomeIcon icon={faLinkedinIn}/></i></a>
                        <a href="https://github.com/vaibhavnirmal2001"><i><FontAwesomeIcon icon={faGithub}/></i></a>
                        <a href="mailto:vaibhavnirmal2001.com"><i><FontAwesomeIcon icon={faEnvelope}/></i></a></div>
                    </div>
                


              
                </div>

    		</div>



        </div>
      </Layouts>
    );
}

export default memo(About);