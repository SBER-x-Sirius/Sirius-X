import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';

import App from './app';
import { store } from './store/store';
import i18n from './configs/localization/i18n';

export default () => <App />;

let rootElement: ReactDOM.Root;

export const mount = (Сomponent, element = document.getElementById('app')) => {
  const rootElement = ReactDOM.createRoot(element);
  rootElement.render(
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <Сomponent />
      </I18nextProvider>
    </Provider>
  );

  if (module.hot) {
    module.hot.accept('./app', () => {
      rootElement.render(<Сomponent />);
    });
  }
};

export const unmount = () => {
  rootElement.unmount();
};
