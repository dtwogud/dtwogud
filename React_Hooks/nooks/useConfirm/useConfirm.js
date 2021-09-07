export const useConfirm = (message = "", onConfirm, onCancel) => {
  if (typeof onConfirm !== "function") {  //onConfirm 없는 경우 typeof 검사에서 undefined로 필터링 되기에 !onConfirm은 안써도 될듯..
    return;
    }
  if (!onCancel || typeof onCancel !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
    onConfirm();
    } else {
      try {
        onCancel();
      } catch (error) {
        return;
      }
    }
  };
    //onCancel()은 필수가 아니라 없는 경우에도 Cancel을 누르면 실행 되기에 예외발생으로 프로그램 오류 방지
  return confirmAction();
};