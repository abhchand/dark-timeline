import React from 'react';
import PropTypes from 'prop-types';

import './CharacterFilter.css';

class CharacterFilter extends React.Component {
  static propTypes = {
    filters: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);

    this.characters = [
      { id: '', value: 'All' },
      { id: 'Agnes Nielsen', value: 'Agnes Nielsen' },
      { id: 'Alexsander Tiedemann', value: 'Alexsander Tiedemann' },
      { id: 'Bartosz Tiedemann', value: 'Bartosz Tiedemann' },
      { id: 'Benni Wöller', value: 'Benni Wöller' },
      { id: 'Bernd Doppler', value: 'Bernd Doppler' },
      { id: 'Charlotte Doppler', value: 'Charlotte Doppler' },
      { id: 'Claudia Tiedemann', value: 'Claudia Tiedemann' },
      { id: 'Clausen', value: 'Clausen' },
      { id: 'Daniel Kahnwald', value: 'Daniel Kahnwald' },
      { id: 'Donata Kraus', value: 'Donata Kraus' },
      { id: 'Doris Tiedemann', value: 'Doris Tiedemann' },
      { id: 'Egon Tiedemann', value: 'Egon Tiedemann' },
      { id: 'Elisabeth Doppler', value: 'Elisabeth Doppler' },
      { id: 'Ema Nielsen', value: 'Ema Nielsen' },
      { id: 'Erik Obendorf', value: 'Erik Obendorf' },
      { id: 'Franziska Doppler', value: 'Franziska Doppler' },
      { id: 'Greta Doppler', value: 'Greta Doppler' },
      { id: 'Gretchen', value: 'Gretchen' },
      { id: 'H.G. Tannhaus', value: 'H.G. Tannhaus' },
      { id: 'Hannah Kahnwald', value: 'Hannah Kahnwald' },
      { id: 'Helge Doppler', value: 'Helge Doppler' },
      { id: 'Ines Kahnwald', value: 'Ines Kahnwald' },
      { id: 'Jana Nielsen', value: 'Jana Nielsen' },
      { id: 'Jonas Kahnwald', value: 'Jonas Kahnwald' },
      { id: 'Jürgen Obendorf', value: 'Jürgen Obendorf' },
      { id: 'Katharina Nielsen', value: 'Katharina Nielsen' },
      { id: 'Mads Nielsen', value: 'Mads Nielsen' },
      { id: 'Magnus Nielsen', value: 'Magnus Nielsen' },
      { id: 'Martha Nielsen', value: 'Martha Nielsen' },
      { id: 'Michael Kahnwald', value: 'Michael Kahnwald' },
      { id: 'Mikkel Nielsen', value: 'Mikkel Nielsen' },
      { id: 'Noah', value: 'Noah' },
      { id: 'Peter Doppler', value: 'Peter Doppler' },
      { id: 'Regina Tiedemann', value: 'Regina Tiedemann' },
      { id: 'Silja', value: 'Silja' },
      { id: 'Torben Wöller', value: 'Torben Wöller' },
      { id: 'Tronte Nielsen', value: 'Tronte Nielsen' },
      { id: 'Ulla Obendorf', value: 'Ulla Obendorf' },
      { id: 'Ulrich Nielsen', value: 'Ulrich Nielsen' },
      { id: 'Yasin Friese', value: 'Yasin Friese' }
    ]
  }

  onChange(e) {
    let value = e.currentTarget.value;

    if (value === '') {
      value = null;
    }

    this.props.onChange('character', value);
  }

  render() {
    return (
      <div className="character-filter header-block">
        <label htmlFor='character-filter'>
          character
        </label>
        <select
          id="character-filter"
          onChange={this.onChange}
          value={this.props.filters.character || ''}>
          {
            this.characters.map((option, _i) => {
              return (
                <option key={`character-filter-${option.id}`} value={option.id}>
                  {option.value}
                </option>
              );
            })
          }
        </select>
      </div>
    );
  }
}

export default CharacterFilter;
