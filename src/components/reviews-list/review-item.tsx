import {Comment} from '../../types/comment.ts';
import {memo} from 'react';

type ReviewItemProps = {
  review: Comment;
}

export function ReviewItem({review}: ReviewItemProps) {

  const date = new Date(Date.parse(review.date));
  const monthName = new Intl.DateTimeFormat('en', { month: 'long' }).format(date);
  const year = date.getFullYear();
  const dateString = `${monthName} ${year}`;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={review.user.avatarUrl}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{review.user.name}</span>
      </div>

      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${review.rating * 20}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">
          {dateString}
        </time>
      </div>
    </li>
  );
}

export const MemoizedReviewItem = memo(ReviewItem);
