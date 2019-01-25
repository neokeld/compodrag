import React from 'react';

import { CollapseCard } from './CollapseCard';

const styles = {
  textAlign: "center"
};

export const CollapseCardExample = () => (
<CollapseCard isOpen={true}>
  <div style={styles}>
    <h1>Titre</h1>
    <h2>Cliquez sur Collapse {"\u2728"}</h2>
  </div>
</CollapseCard>
);

