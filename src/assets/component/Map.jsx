import React from 'react'

function Map() {
    return (
        <div style={{ width: '100%' }}>
          <iframe
            title="Google Map"
            width="100%"
            height="600"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            style={{ border: 0 }}
            allowFullScreen
          />
        </div>
      );
    }

export default Map
