// Updated ImageSequenceHero.tsx to include a null container check

import React from 'react';

const ImageSequenceHero = ({ container }) => {
    // Null container check
    if (!container) {
        return null;
    }

    return (
        <div>
            {/* Your component code here */}
        </div>
    );
};

export default ImageSequenceHero;