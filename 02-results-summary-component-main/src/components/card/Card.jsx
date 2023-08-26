import iconMemory from '../../resources/icons/icon-memory.svg';
import iconReaction from '../../resources/icons/icon-reaction.svg';
import iconVerbal from '../../resources/icons/icon-verbal.svg';
import iconVisual from '../../resources/icons/icon-visual.svg';

import './Card.scss';

function Card() {
  return (
    <div className='card'>
      <div className='card__info'>
        <div className='card__subtitle'>Your Result</div>
        <div className='card__result'>
          <div>
            {/* for make it center */}
            <div className='card__number'>76</div>
            <div className='card__descr'>of 100</div>
          </div>
        </div>
        <div className='card__title'>Great</div>
        <p className='card__text'>You scored higher than 65% of the people who have taken these tests.</p>
      </div>
      <div className='card__general'>
        <div className='card__subtitle card__subtitle--secondary'>Summary</div>
        <div className='card__lists'>
          <div className='card__list'>
            <div className='card__item card__item--red'>
              <img
                className='card__icon'
                src={iconReaction}
                alt='Reaction'
              />
              <span className='card__name card__name--red'>Reaction</span>
              <span className='card__score'>
                80&nbsp;&nbsp;
                <span className='text--light'>/&nbsp;100</span>
              </span>
            </div>
          </div>
          <div className='card__list'>
            <div className='card__item card__item--yellow'>
              <img
                className='card__icon'
                src={iconMemory}
                alt='Memory'
              />
              <span className='card__name card__name--yellow'>Memory</span>
              <span className='card__score'>
                92&nbsp;&nbsp;
                <span className='text--light'>/&nbsp;100</span>
              </span>
            </div>
          </div>
          <div className='card__list'>
            <div className='card__item card__item--green'>
              <img
                className='card__icon'
                src={iconVerbal}
                alt='Verbal'
              />
              <span className='card__name card__name--green'>Verbal</span>
              <span className='card__score'>
                61&nbsp;&nbsp;
                <span className='text--light'>/&nbsp;100</span>
              </span>
            </div>
          </div>
          <div className='card__list'>
            <div className='card__item card__item--blue'>
              <img
                className='card__icon'
                src={iconVisual}
                alt='Visual'
              />
              <span className='card__name card__name--blue'>Visual</span>
              <span className='card__score'>
                72&nbsp;&nbsp;
                <span className='text--light'>/&nbsp;100</span>
              </span>
            </div>
          </div>
        </div>
        <button className='card__button'>Continue</button>
      </div>
    </div>
  );
}

export default Card;
