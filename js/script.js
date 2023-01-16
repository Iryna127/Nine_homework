const editField = document.getElementById('editFld');
function onPrintHandler() {
  const html = `<div>${editField.value}</div>`;
  document.getElementById('result').innerHTML = html;
  (editField.value === '') ?  mes.classList.add('is-visible') : mes.classList.remove('is-visible');
}
const onClearHandler = () => {
  editField.value = '';
  document.getElementById('result').innerHTML = '';
};
