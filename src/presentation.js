// Import React
import React from 'react'

// Import Spectacle Core tags
import {
	BlockQuote,
	Cite,
	CodePane,
	Deck,
	Heading,
	ListItem,
	List,
	Quote,
	Slide,
	Text
} from 'spectacle'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

// Require CSS
require('normalize.css')

const theme = createTheme(
	{
		primary: 'white',
		secondary: '#1F2022',
		tertiary: '#03A9FC',
		quartenary: '#CECECE'
	},
	{
		primary: 'Montserrat',
		secondary: 'Helvetica'
	}
)

export default class Presentation extends React.Component {
	render() {
		return (
			<Deck
				transition={['zoom', 'slide']}
				transitionDuration={500}
				theme={theme}
			>
				<Slide transition={['zoom']} bgColor="primary">
					<Heading size={1} fit caps lineHeight={1} textColor="secondary">
						Whats new in React v16?
					</Heading>
					<List>
						<ListItem>Error Handling using Error Boundaries</ListItem>
						<ListItem>Item 2</ListItem>
						<ListItem>Item 3</ListItem>
						<ListItem>Item 4</ListItem>
					</List>
					<Text margin="10px 0 0" textColor="tertiary" size={1} fit bold />
				</Slide>
				<Slide
					transitionIn={['zoom', 'fade']}
					transitionOut={['slide', 'fade']}
					bgColor="primary"
					notes="<ul><li>talk about that</li><li>and that</li></ul>"
				>
					<CodePane
						lang="jsx"
						margin="20px auto"
						overflow="overflow"
						source={`<Text>Hello there!</Text>`}
					/>
				</Slide>
				<Slide
					transition={['fade']}
					bgColor="primary"
					textColor="tertiary"
					notes={`
          <ul>
            <li>worth creating a errorReportingService so that we log where and what happened</li>
            <li>uncaught errors result in unmounting of the whole component tree (new in React 16)</li>
          </ul>`}
				>
					<Heading size={1} textColor="secondary">
						Error Handling using Error Boundaries
					</Heading>
					<Text>Where errors are caught?</Text>
					<List>
						<ListItem>in function components</ListItem>
						<ListItem>in render method</ListItem>
						<ListItem>in lifecycle methods</ListItem>
						<ListItem>in setState</ListItem>
					</List>
					<Text>Where errors are NOT caught?</Text>
					<List>
						<ListItem>Errors inside event handlers</ListItem>
					</List>
				</Slide>
				<Slide transition={['fade']} bgColor="primary" textColor="tertiary">
					<Heading size={6} textColor="secondary" caps>
						Standard List
					</Heading>
					<List>
						<ListItem>Item 1</ListItem>
						<ListItem>Item 2</ListItem>
						<ListItem>Item 3</ListItem>
						<ListItem>Item 4</ListItem>
					</List>
				</Slide>
				<Slide transition={['fade']} bgColor="secondary" textColor="primary">
					<BlockQuote>
						<Quote>Example Quote</Quote>
						<Cite>Author</Cite>
					</BlockQuote>
				</Slide>
			</Deck>
		)
	}
}
