import React, { memo } from 'react'
import { styled } from '@linaria/react'

import madison from './images/madipixel.gif'
import construction from './images/under-construction.gif'

function App() {
	return (
		<AppContainer>
			<Title>Standard Millwork is under construction...</Title>
			<ConstructionImage src={construction} alt="Under Construction" />
			<Spacer />
			<Footer>
				<MadisonImage src={madison} alt="Madison" />
				<div>
					Hard work in progress by <a href="https://madisonmsites.com">Madison Sites</a>
				</div>
			</Footer>
		</AppContainer>
	)
}

export default memo(App)

const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 100vh;
	padding: 1em;
`

const Title = styled.h1`
	text-align: center;
`

const ConstructionImage = styled.img`
	border-radius: 50%;
	width: 100%;
	max-width: 400px;
	margin-bottom: 1em;
`

const Footer = styled.footer`
	display: flex;
	align-items: center;
`

const MadisonImage = styled.img`
	border-radius: 50%;
	width: 50px;
	height: 50px;
	margin-right: 5px;
`

const Spacer = styled.div`
	flex: 1;
`
