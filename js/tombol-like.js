'use strict';

const e = React.createElement;

class TombolSuka extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      alert('Kamu berhasil menyukai');
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Suka'
    );
  }
}

class TombolBeli extends React.Component {
  constructor(props) {
    super(props);
    this.state = { beli: false };
  }

  render() {
    if (this.state.beli) {
      window.location.replace("https://wa.me/6285254257455?text=Saya%20tertarik%20ingin%20membeli%20terimakasih!");
    }

    return e(
      'button',
      { onClick: () => this.setState({ beli: true }) },
      'Beli'
    );
  }
}

document.querySelectorAll('.tombol_suka')
  .forEach(domContainer => {
    ReactDOM.render(
      e(TombolSuka),
      domContainer
    );
  });

  document.querySelectorAll('.tombol_beli')
  .forEach(domContainer => {
    ReactDOM.render(
      e(TombolBeli),
      domContainer
    );
  });