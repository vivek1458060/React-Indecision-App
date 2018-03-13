class VisibilityToggle extends React.Component {
    constructor (props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility : false
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }
    render() {
        return (
            <div>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {this.state.visibility && <p>These are some details you can see</p>}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// var visiblity = false;
// var toggleVisiblity = () => {
//     visiblity = !visiblity;
//     render();
// }

// var render = () => {
//     var jsx = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisiblity}>
//               {visiblity ? 'Show details' : 'Hide details'}
//             </button>
//             {visiblity && (
//                 <div>
//                   <p>There are some datails you can see!</p>
//                 </div>
//             )}
//         </div>
//     )
            
//     ReactDOM.render(jsx, document.getElementById('app'));
// }
// render();