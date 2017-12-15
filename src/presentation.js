// Import React
import React from 'react'

// Import Spectacle Core tags
import {
	Appear,
	BlockQuote,
	Code,
	CodePane,
	ComponentPlayground,
	Deck,
	Heading,
	Link,
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
		secondary: '#ea5f6e',
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
				<Slide transition={['fade']} bgColor="primary" textColor="secondary">
					<Heading size={1} fit caps lineHeight={1} textColor="secondary">
						What are the new goodies in React v16?{' '}
						<span role="img" aria-label="emoji">
							🤔
						</span>
					</Heading>
				</Slide>
				<Slide transition={['fade']} bgColor="primary" textColor="secondary">
					<Heading size={6} textColor="secondary">
						About myself:
					</Heading>
					<Text>Marcin</Text>
					<Text>Front End Engineer</Text>
					<Text textColor="secondary">@ Kalo</Text>
				</Slide>
				<Slide transition={['zoom']} bgColor="primary">
					<Heading size={1} fit caps lineHeight={1} textColor="secondary">
						Here are the new goodies in React v16
					</Heading>
					<List>
						<Appear order="1">
							<ListItem>
								<Link
									href="https://reactjs.org/blog/2017/09/26/react-v16.0.html#better-error-handling"
									target="_blank"
								>
									Error Handling using Error Boundaries
								</Link>
							</ListItem>
						</Appear>
						<Appear order="2">
							<ListItem>
								<Link
									href="https://reactjs.org/blog/2017/09/26/react-v16.0.html#new-render-return-types-fragments-and-strings"
									target="_blank"
								>
									Render Multiple Elements without a Wrapping Element in a
									Component
								</Link>
							</ListItem>
						</Appear>
						<Appear order="3">
							<ListItem>Render Text Only Components</ListItem>
						</Appear>
						<Appear order="4">
							<ListItem>
								<Link
									href="https://reactjs.org/blog/2017/09/26/react-v16.0.html#portals"
									target="_blank"
								>
									Render Elements Outside the Current React Tree using Portals
								</Link>
							</ListItem>
						</Appear>
						<Appear order="5">
							<ListItem>
								<Link
									href="https://reactjs.org/blog/2017/09/26/react-v16.0.html#support-for-custom-dom-attributes"
									target="_blank"
								>
									Define DOM Attributes
								</Link>
							</ListItem>
						</Appear>
						<Appear order="6">
							<ListItem>
								Call setState with null to Avoid Triggering an Update
							</ListItem>
						</Appear>
						<Appear order="7">
							<ListItem>
								Bonus in <Code>v16.2.0</Code> 🎁
								<Link
									href="https://reactjs.org/blog/2017/11/28/react-v16.2.0-fragment-support.html"
									target="_blank"
								>
									Fragments
								</Link>
							</ListItem>
						</Appear>
					</List>
				</Slide>
				<Slide transition={['fade']} bgColor="secondary" textColor="primary">
					<BlockQuote>
						<Quote>Error Handling using Error Boundaries</Quote>
					</BlockQuote>
				</Slide>
				<Slide transition={['fade']} bgColor="primary" textColor="tertiary">
					<Text textColor="secondary">
						Error Handling using Error Boundaries
					</Text>
					<CodePane
						lang="jsx"
						margin="20px auto"
						overflow="overflow"
						source={`
const Hello = ({user}) => <h1>Hello {user.name}!</h1>;

class ErrorBoundaries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false, error: null, info: null};
  }

  componentDidCatch(error, info) {
    this.setState(state => ({ ...state, hasError: true, error, info }));
  }

  render() {
    return this.state.hasError
      ? <div style={styles.error}>!Error: {this.state.error.message}</div>
      : this.props.children;
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
					notes={
						'<ul> <li>worth creating a errorReportingService so that we log where and what happened</li> <li>uncaught errors result in unmounting of the whole component tree (new in React 16)</li> </ul>'
					}
				>
					<Heading size={5} textColor="secondary">
						Error Handling using Error Boundaries
					</Heading>
					<Text size={6}>Where errors are caught?</Text>
					<List textColor="black">
						<ListItem size={5}>in function components</ListItem>
						<ListItem>in render method</ListItem>
						<ListItem>in lifecycle methods</ListItem>
						<ListItem>in setState</ListItem>
					</List>
					<Text textColor="secondary">
						Errors are NOT caught inside event handlers!
					</Text>
				</Slide>
				<Slide transition={['fade']} bgColor="secondary" textColor="primary">
					<BlockQuote>
						<Quote>
							Render Multiple Elements without a Wrapping Element in a Component
						</Quote>
					</BlockQuote>
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
					<Text textColor="secondary">
						Render Multiple Elements without a Wrapping Element in a Component
					</Text>
					<CodePane
						lang="jsx"
						margin="20px auto"
						overflow="overflow"
						source={`const Aux = props => props.children;

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
					<Text textColor="secondary">
						Render Multiple Elements without a Wrapping Element in a Component
					</Text>
					<CodePane
						lang="jsx"
						margin="20px auto"
						overflow="overflow"
						source={`class App extends React.Component {
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
				<Slide transition={['fade']} bgColor="secondary" textColor="primary">
					<BlockQuote>
						<Quote>Render Text Only Components</Quote>
					</BlockQuote>
				</Slide>
				<Slide
					transitionIn={['zoom', 'fade']}
					transitionOut={['slide', 'fade']}
					bgColor="primary"
					notes=""
				>
					<Text textColor="secondary">
						Render Text Only Components in older versions of React
					</Text>
					<CodePane
						lang="jsx"
						margin="20px auto"
						overflow="overflow"
						source={`const Comment = ({ text }) => (
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
				<Slide
					transitionIn={['zoom', 'fade']}
					transitionOut={['slide', 'fade']}
					bgColor="primary"
					notes=""
				>
					<Text textColor="secondary">
						Render Text Only Components in React 16
					</Text>
					<CodePane
						lang="jsx"
						margin="20px auto"
						overflow="overflow"
						source={`const Comment = ({ text }) => text
  .replace(':)', '😊')
  .replace(':D', '😀')
  .replace(':(', '🙁');

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
				<Slide transition={['fade']} bgColor="secondary" textColor="primary">
					<BlockQuote>
						<Quote>
							Render Elements Outside the Current React Tree using Portals
						</Quote>
					</BlockQuote>
				</Slide>
				<Slide transition={['fade']} bgColor="primary" textColor="tertiary">
					<Text textColor="secondary">
						Render Elements Outside the Current React Tree using Portals
					</Text>
					<CodePane
						lang="jsx"
						margin="20px auto"
						overflow="overflow"
						notes={`live demo: "https://csb-ymz9q04ozv-bolcaexqbb.now.sh/"`}
						source={`class App extends React.Component {
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

ReactDOM.render(<App />, document.getElementById('root'));`}
					/>
				</Slide>
				<Slide transition={['fade']} bgColor="secondary" textColor="primary">
					<BlockQuote>
						<Quote>Define DOM Attributes</Quote>
					</BlockQuote>
				</Slide>
				<Slide
					transitionIn={['zoom', 'fade']}
					transitionOut={['slide', 'fade']}
					bgColor="primary"
					notes=""
				>
					<Text textColor="secondary">Define DOM Attributes</Text>
					<CodePane
						lang="jsx"
						margin="20px auto"
						overflow="overflow"
						source={`class App extends React.Component {
  render() {
    return (
      <div
        my-attribute="foo"
        // my-lucky-number={42}
        // tabindex="-1"
        // tabIndex="-1"
        class="bar"
      // className={false}
      // className={NaN}
      // className={() => null}
      // className={Symbol('foo')}
      // className={{ foo: 'bar' }}
      // className={foo}
      // onclick="alert('Hi!')"
      >
        Hello!
      </div>
    );
  }
}`}
					/>
				</Slide>
				<Slide transition={['fade']} bgColor="secondary" textColor="primary">
					<BlockQuote>
						<Quote>Call setState with null to Avoid Triggering an Update</Quote>
					</BlockQuote>
				</Slide>
				<Slide
					transitionIn={['zoom', 'fade']}
					transitionOut={['slide', 'fade']}
					bgColor="primary"
					notes="<ul><li>talk about that</li><li>and that</li></ul>"
				>
					<Heading size={5} textColor="secondary">
						Call setState with null to Avoid Triggering an Update
					</Heading>
					<CodePane
						lang="jsx"
						margin="20px auto"
						overflow="overflow"
						source={`class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {city: 'London'};
  }

  selectCity = evt => {
    const newValue = evt.target.value;
    this.setState(state => {
      if (state.city === newValue) { return null; }
      return {city: newValue};
    });
  };

  render() {
    return (
      <div>
        <button type="button" value="London" onClick={this.selectCity}>
          London
        </button>
        <button type="button" value="Kraków" onClick={this.selectCity}>
          Kraków
        </button>
        <City name={this.state.city} />
      </div>
    );
  }
}`}
					/>
				</Slide>
				<Slide transition={['fade']} bgColor="secondary" textColor="primary">
					<BlockQuote>
						<Quote>Questions?</Quote>
					</BlockQuote>
				</Slide>
				<Slide transition={['fade']} bgColor="secondary" textColor="primary">
					<BlockQuote>
						<Quote>THE END</Quote>
					</BlockQuote>
				</Slide>
				<Slide transition={['fade']} bgColor="secondary" textColor="primary">
					<ComponentPlayground theme="light" />
				</Slide>
			</Deck>
		)
	}
}
