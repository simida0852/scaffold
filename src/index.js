import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'mobx-react'
import { injectGlobal } from 'styled-components'

import App from './app'
import Button from './components/button'
injectGlobal`
    html {
        height: 100%;
    }
    body {
        height: 100%;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`


render(
    <Provider>
        <Button />
    </Provider>,
    document.getElementById('root')
)