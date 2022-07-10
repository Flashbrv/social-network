import React from "react";

const Profile = () => {
  return(
    <div className='content'>
      <div className='content__img'></div>
      <div className='content__persona-data'>
        <div className='person-data__img'></div>
        <div className='person-data'>
          <div className='person-data__title'>
            Roman B.
          </div>
          <div className='person-data__content'>
            <span>Date of birth:</span> 20 december<br/>
            <span>City:</span> Poltava<br/>
            <span>Education:</span> NUFI \'06<br/>
          </div>
        </div>
      </div>
      <div className='content__form'>
        <h3>My posts</h3>
        <form>
          <textarea className='form-text' type='textarea' rows={4} placeholder='Your news' />
          <button className='form-btn'>Send</button>
        </form>
      </div>
      <div className='content__posts-list'>
        <div className='post'>
          <div className='post-img'></div>
          <div className='post-text'>Hey, why nobody love me?</div>
        </div>
        <div className='post'>
          <div className='post-img'></div>
          <div className='post-text'>It's our new programm! Hey!</div>
        </div>
      </div>
    </div>
  )
}

export default Profile;