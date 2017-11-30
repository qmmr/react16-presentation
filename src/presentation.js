// Import React
import React from 'react'

// Import Spectacle Core tags
import {
	BlockQuote,
	Cite,
	CodePane,
	ComponentPlayground,
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
						<ListItem>
							Render Multiple Elements without a Wrapping Element in a Component
						</ListItem>
						<ListItem>Render Text Only Components</ListItem>
						<ListItem>
							Render Elements Outside the Current React Tree using Portals
						</ListItem>
					</List>
					<Text margin="10px 0 0" textColor="tertiary" size={1} fit bold />
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
					<Heading size={5} textColor="secondary">
						Error Handling using Error Boundaries
					</Heading>
					<Text size={6}>Where errors are caught?</Text>
					<List>
						<ListItem size={5}>in function components</ListItem>
						<ListItem>in render method</ListItem>
						<ListItem>in lifecycle methods</ListItem>
						<ListItem>in setState</ListItem>
					</List>
					<Text color="red">Errors are NOT caught inside event handlers!</Text>
				</Slide>
				<Slide transition={['fade']} bgColor="primary" textColor="tertiary">
					<CodePane
						lang="jsx"
						margin="20px auto"
						overflow="overflow"
						source={`
    const Hello = ({user}) => {
      return <h1>Hello {user.name}!</h1>;
    }

    class ErrorBoundaries extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          hasError: false,
          error: null,
          info: null
        };
      }

      componentDidCatch(error, info) {
        this.setState(state => ({ ...state, hasError: true, error, info }));
      }

      render() {
        if (this.state.hasError) {
          return <div style={styles.error}>!Error: {this.state.error.message}</div>;
        } else {
          return this.props.children;
        }
      }
    }

    const App = () => (
      <div style={styles}>
        <ErrorBoundaries>
          <Hello />
        </ErrorBoundaries>
      </div>
    );

    render(<App />, document.getElementById("root"));
    `}
					/>
				</Slide>
				<Slide
					transition={['fade']}
					bgColor="primary"
					textColor="tertiary"
					notes={`
          <ul>
            <li>until React 16 it was only possible to render one element</li>
            <li>key property is needed to let React know how to handle multiple elements</li>
            <li>you can use wrapper component or use array</li>
          </ul>`}
				>
					<Heading size={5} textColor="secondary">
						Render Multiple Elements without a Wrapping Element in a Component
					</Heading>
					<CodePane
						lang="jsx"
						margin="20px auto"
						overflow="overflow"
						source={`
const Aux = props => props.children;

const Fruits = () => (
  <Aux>
    <li key="1">Apple</li>
    <li key="2">Orange</li>
    <li key="3">Banana</li>
  </Aux>
)

class MoreFruits extends React.Component {
  render() {
    [
      <li key="1">Strawberry</li>,
      <li key="2">Blueberry</li>
    ];
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>Peach</li>
          <li>Ananas</li>
          <Fruits />
          <MoreFruits />
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
`}
					/>
				</Slide>
				<Slide
					transitionIn={['zoom', 'fade']}
					transitionOut={['slide', 'fade']}
					bgColor="primary"
					notes="<ul><li>talk about that</li><li>and that</li></ul>"
				>
					<Heading size={5} textColor="secondary">
						Render Text Only Components
					</Heading>
					<CodePane
						lang="jsx"
						margin="20px auto"
						overflow="overflow"
						source={`
const Comment = ({ text }) => (
  <span>
  {text
    .replace(':)', '😊')
    .replace(':D', '😀')
    .replace(':(', '🙁')
  }
  </span>
)

class App extends React.Component {
  render() {
    return (
      <div>
        <Comment text="Today we are sailing home :)" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
`}
					/>
				</Slide>
				<Slide transition={['fade']} bgColor="primary" textColor="tertiary">
					<CodePane
						lang="jsx"
						margin="20px auto"
						overflow="overflow"
						notes={`live demo: "https://csb-ymz9q04ozv-bolcaexqbb.now.sh/"`}
						source={`
              class App extends React.Component {
                render() {
                  return (
                    <div>
                      <h1>Dashboard</h1>
                      {ReactDOM.createPortal(
                        <div>I come from another dimension!</div>,
                        document.getElementById('portal')
                      )}
                    </div>
                  );
                }
              }

              ReactDOM.render(<App />, document.getElementById('root'));

    `}
					/>
				</Slide>
				<Slide transition={['fade']} bgColor="secondary" textColor="primary">
					<ComponentPlayground theme="light" />
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
