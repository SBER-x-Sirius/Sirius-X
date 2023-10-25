import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './app';
import { store } from './__data__/store';
import './configs/localization/i18n';

export default () => <App />;

let rootElement: ReactDOM.Root;

export const mount = (Сomponent, element = document.getElementById('app')) => {
  const rootElement = ReactDOM.createRoot(element);
  rootElement.render(
    <Provider store={store}>
      <Сomponent />
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
