// -- basic library --
import React from 'react';
import styled from 'styled-components';
import { styles } from 'utils/styles';
import AlertDialog from './AlertDialog';


// -- external components --

/**
 * ページ全体
 */
const SiDocument: React.FC = (params) => {

  // -- render part --
  return (
  <StyledDocument>
    <Body>
      <Content>{params.children}</Content>
    </Body>
    <AlertDialog />
  </StyledDocument>
  );
}


// -- styled components --
const StyledDocument = styled.div`
  display: flex;
  position: relative;
  height: 100vh;
  width: 100vw;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: calc(100% - ${styles.sidemenu_width});
`;

const Content = styled.div`
  width: 100%;
  height: calc(100% - ${styles.topmenu_height} - ${styles.footer_height});
  padding-top: 1px;
  overflow: hidden;
`;

// -- finally export part --

export default SiDocument;
