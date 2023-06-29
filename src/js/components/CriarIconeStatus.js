export function CriarIconStatus(status) {
  const icon = document.createElement('ion-icon');
  let classIcon;
  let nameIcon;

  if (status === 1) {
    nameIcon = "checkmark-outline";
    classIcon = 'noChecked';
  } else if (status === 2) {
    nameIcon = "checkmark-done-outline";
    classIcon = 'noChecked';
  } else if (status === 3) {
    nameIcon = "checkmark-done-outline";
    classIcon = 'checked';
  }

  icon.setAttribute('name', nameIcon);
  icon.classList.add(classIcon);

  return icon;
}