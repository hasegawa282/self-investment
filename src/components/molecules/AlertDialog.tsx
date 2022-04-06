import React from 'react';
import SiAlert from 'components/atoms/SiAlert';

/**
 * アラートメッセージダイアログです。
 * シングルトンインスタンスを保持するため、画面上に２つ以上配置しないでください。
 * ダイアログの呼び出し方:
 *  AlertDialog.show('メッセージ');
 */
interface AlertDialogProps {}
interface AlertDialogState {
  isOpen: boolean;
  message: string | JSX.Element | string[];
  callback?: () => void;
}
export default class AlertDialog extends React.PureComponent<AlertDialogProps, AlertDialogState> {
  static instance?: AlertDialog;
  constructor(props: AlertDialogProps) {
    super(props);
    this.state = {
      isOpen: false,
      message: '',
    }
  }
  componentDidMount() {
    AlertDialog.instance = this;
  }
  componentWillUnmount() {
    AlertDialog.instance = undefined;
  }
  static show(message: string | JSX.Element | string[], callback?: () => void) {
    if (AlertDialog.instance) {
      AlertDialog.instance.setState({isOpen: true, message: message, callback: callback});
    } else {
      alert(message);
    }
  }
  onClose() {
    this.setState({isOpen: false})
    if (this.state.callback) {
      this.state.callback();
    }
  }
  render() {
    return (
      <>
        {this.state.isOpen ? 
          <SiAlert
            isOpen={this.state.isOpen}
            onClose={() => this.onClose()}>
            {this.state.message}
          </SiAlert> : null}
      </>
    )
  }
}
