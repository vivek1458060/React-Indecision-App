import React from 'react';
import AddOptions from './AddOptions';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModel from './OptionModel';

class IndecisionApp extends React.Component {
  state = {
    options: ['thing one', 'thing two', 'thing three'],
    selectedOption: undefined
  }
  handlePick = () => {
    var randomNum = Math.floor((Math.random() * this.state.options.length));
    var option = this.state.options[randomNum];
    this.setState(() => ({ selectedOption: option }));
  }
  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  }
  handleDeleteOptions = () => {
    this.setState((prevState) => ({ options: [] }))
  }
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option !== optionToRemove)
    }))
  }
  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'Item already added';
    }
    this.setState((prevState) => ({ options: prevState.options.concat(option) }))
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {

    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  render() {
    const title = 'Indecision'; //title prop for header component
    const subtitle = 'Put your life in the handsof a computer';
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOptions
              handleAddOption={this.handleAddOption}
            />
          </div>
        </div>
        <OptionModel
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}

export default IndecisionApp;