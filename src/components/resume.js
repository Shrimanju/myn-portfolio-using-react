import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';

import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="data:image/png;base64,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"
                alt="avatar"
                className="avatar-imggg"
                 />
            </div>

            <h2 style={{paddingTop: '1em'}}>SHIMANJU.K.S</h2>
            <h4 style={{color: 'grey'}}>STUDENT</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>To work in a creative environment and effectively contribute towards the goals of the organization, besides gaining as much knowledge as possible in order to achieve expertise in the working domain.

.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Srinivasa Nagara<br/>
            Banglore</p>
            <h5>Phone</h5>
            <p>8746022188</p>
            <h5>Email</h5>
            <p>shrimanju61@.com</p>
            
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
                 startYear={2017}
                 endYear={2020}
                 schoolName="FINAL YEAR BE(CSE)"
                 schoolDescription="JSS ACCADEMY OF TECHNICAL EDUCATION(BANGLORE)"
                
                />

            <Education
              startYear={2013}
              endYear={2014}
              schoolName="DIPLOMO IN CSE"
              schoolDescription="DVS POLYTECHNIC(SHIMOGGA)"
               />

               <Education
                 startYear={2014}
                 endYear={2017}
                 schoolName="SSLC"
                 schoolDescription="HOLY REDEEMER HIGH SCHOOL(HOSANAGARA)"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

           
              <Skills
                skill="javascript"
                progress={60}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="React"
                    progress={50}
                    />
                    <Skills
                      skill="Python"
                      progress={62}
                      />
                      <Skills
                      skill="SQL"
                      progress={50}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
