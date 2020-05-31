import React, { Component } from 'react'
import './activityPane.css'
import ActivityTile from '../activityTile/activityTile'

class ActivityPane extends Component {

    render() {
        const CreateActivityTiles = (activities, user) => activities.map(activity => <ActivityTile user={user} header={activity.header} desc={activity.desc}></ActivityTile>);
        
        let activityList = [
            {
                header: 'STSL 2020 Champion',
                desc: 'Fenerbahçe'
            },
            {
                header: 'Survivor 2020 Champion',
                desc: 'Ersin Korkut'
            },
            {
                header: 'F1 2020 Champion',
                desc: 'Lewis Hamilton'
            }
        ];
        let user = {
            name: 'John Doe'
        }
        return (
            <div id="activity-pane" className="col-6 col-sm-4 col-md-3 d-none d-md-block">
                <div className="row m-1">
                    <div className="row">
                        <h6 className="col-12 pl-2 font-weight-bold">Activity</h6>
                        {CreateActivityTiles(activityList, user)}
                    </div>
                </div>
            </div>

        )
    }
}

export default ActivityPane