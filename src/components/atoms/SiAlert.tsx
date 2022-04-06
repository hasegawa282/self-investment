import { Alert } from '@blueprintjs/core';
import styled from 'styled-components';
import { new_colors } from 'utils/colors';
import { styles } from 'utils/styles';

// ボタンがdisabledの時のデザイン
const disabled_style = (disabled?: boolean) => {
  return `
    background: ${disabled ? new_colors.disabled_background_color : new_colors.component_main_color} !important; 
    color: ${disabled ? new_colors.main_font_color : new_colors.white} !important; 
    cursor: ${disabled ? 'not-allowed' : 'pointer'} !important;
  `
};

// blueprintjsのAlertコンポーネントは、キャンセルのボタンが1番目、確認のボタンが2番目(キャンセルがない時は、確認が1番目)に配置されている。
// これを利用して、ボタンのdisabled時のデザインを変える。
const SiAlert = styled(Alert)<{
  body_width?: string;
  disabled_first_button?: boolean;
  disabled_last_button?: boolean;
}>`
  .bp3-alert-body {
    width: ${(p) => (p.body_width ? p.body_width : 'auto')}
  }
  .bp3-alert-contents {
    width: ${(p) => (p.body_width ? p.body_width : 'auto')}
  }
  .bp3-alert-footer {
    .bp3-button {
      border-radius: 25px;
      width: ${styles.super_small_button_width};
      font-family: inherit;
      font-weight: 500;
      border: none;
      cursor: pointer;
      color: ${new_colors.white};
      background: ${new_colors.component_main_color};
      :first-child {
        ${(p) => disabled_style(p.disabled_first_button)};
      }
      :last-child {
        ${(p) => disabled_style(p.disabled_last_button)};
      }
    }
  }
`;

export default SiAlert