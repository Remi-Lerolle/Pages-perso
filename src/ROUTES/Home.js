import {React, useContext} from 'react';
import { Container } from 'react-bootstrap';
import i18n from '../Translation/i18n';
import {LangContext} from '../App.js'

function Home() {
  const lang = useContext(LangContext);
  i18n.changeLanguage(lang)

  return (
    <Container >
      <h1>{i18n.t('RL.personnal.web.pages')}</h1>
    </Container>
  )
}

export default Home;