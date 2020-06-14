import React, { Component } from 'react';
import './Detail.css';
import brand from '../styles/brand.svg';
import records from '../styles/records.svg';
import customizable from '../styles/customizable.svg';
import { Links } from '../Links/Links';
export class Detail extends Component {
  render() {
    const { getLink, onChange, currentValue, link } = this.props;
    return (
      <div className='detailPart'>
        <div className='shorten-form'>
          <input
            type='text'
            placeholder='Shorten a link here...'
            value={currentValue}
            onChange={onChange}
            className='input'
          />
          <button onClick={getLink}>Shorten it!</button>
        </div>
        {link.map((lin, index) => {
          return <Links link={lin} key={index} />;
        })}

        <div className='detail'>
          <h1>Advanced Statistics</h1>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard
          </p>
        </div>
        <div className='statinfo'>
          <div className='statone'>
            <img src={brand} />
            <h4>Brand Recognition</h4>
            <p>
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links don't mean a thing.Branded links help
              instil confidence in your content.
            </p>
          </div>
          <div className='stattwo'>
            <img src={records} />
            <h4>Detailed Records</h4>
            <p>
              Get insights into who is clicking your links.Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div className='statthree'>
            <img src={customizable} />
            <h4>Fully Customizable</h4>
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
          <div className='line'></div>
          <div className='linetwo'></div>
        </div>
        <div className='getstarted'>
          <h1>Boost your links today</h1>
          <button>Get started</button>
        </div>
      </div>
    );
  }
}
