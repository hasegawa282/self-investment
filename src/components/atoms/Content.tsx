import styled from 'styled-components';
import { styles } from 'utils/styles';

// コンテンツの全体領域
export const WholeArea = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  padding: ${styles.whole_padding};
`;