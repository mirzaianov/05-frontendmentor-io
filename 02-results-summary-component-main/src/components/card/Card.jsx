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
        <div className='card__subtitle card__subtitle--secondary'></div>
        <div className='card__list'>
          <div className='card__item'>
            <img
              className='card__icon'
              src={iconReaction}
              alt='Reaction'
            />
            <span className='card__name'>Reaction</span>
            <span className='card__score'>
              <span className='text--bold'>80</span> / 100
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
