import React from 'react';
import { deleteApplications } from '../../utility/fakedb';

const Clear = ({clear}) => {
    return (
        <div>
            <button onClick={() =>clear()} type="button" className="btn btn-dark">Clear all applications</button>

        </div>
    );
};

export default Clear;