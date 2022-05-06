import React from 'react';
import PageHeader from './components/PageHeader/PageHeader'
import PageContent from './components/PageContent/PageContent'
import PageFooter from './components/PageFooter/PageFooter'


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <PageHeader></PageHeader>
        <PageContent></PageContent>
        <PageFooter></PageFooter>
      </>
    ) 

  }
}

export default App;
