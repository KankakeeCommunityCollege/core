const VIDEO_SETTING_BUTTON = document.getElementById('videoButton');
const SETTING_BUTTON_CLASS = '.setting__button';

function recallSetting(button) {
  const setting = button.dataset.setting;
  let savedSetting;

  if (!window.localStorage.getItem(setting)) return;
  if (button.dataset.value === window.localStorage.getItem(setting)) return;
  
  window.localStorage.getItem(setting) == 'false' ? savedSetting = false : savedSetting = true;
  const settingSpan = `<span class="visually-hidden">Turn setting ${!savedSetting ? 'on' : 'off'}</span>`;

  button.dataset.value = savedSetting.toString();
  button.classList.remove(`setting__button--${!savedSetting ? 'on' : 'off'}`);
  button.classList.add(`setting__button--${!savedSetting ? 'off' : 'on'}`);
  return button.innerHTML = settingSpan;
}

function settingsButtonClickHandler(e) {
  let currentSettingState;
  let settingButton = e.target;

  settingButton.dataset.value === 'true' ? currentSettingState = true
  : settingButton.dataset.value === 'false' ? currentSettingState = false
  : null;

  currentSettingState === null ? new Error(
`Error in userSettings.js module
"currentSettingState" is undefined:
Make sure you have a "data-value" attribute set to "true" or "false"`
  ) : null;

  const settingMessage = `<span class="visually-hidden">Turn setting ${currentSettingState ? 'on' : 'off'}</span>`;
  
  window.localStorage.setItem(settingButton.dataset.setting, (!currentSettingState).toString());

  settingButton.classList.toggle(`setting__button--${currentSettingState ? 'on' : 'off'}`);
  settingButton.classList.toggle(`setting__button--${currentSettingState ? 'off' : 'on'}`);
  settingButton.dataset.value = (!currentSettingState).toString()
  return settingButton.innerHTML = settingMessage;
}

function userSettings() {
  const settingButtons = [...document.querySelectorAll(SETTING_BUTTON_CLASS)];

  settingButtons.forEach(button => {
    button.addEventListener('click', settingsButtonClickHandler);
    recallSetting(button);
  });
}

export default userSettings;
