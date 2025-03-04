import React from 'react';
import { Link } from 'react-router-dom';
import classes from './thumbnails.module.css';
import StarRating from '../StarRating/StarRating';
import Price from '../Price/Price';


export default function Thumbnails({ foods }) {
    return (
        <ul className={classes.list}>
            {foods.map(food => {
                return (  // Use return to return JSX
                    <li key={food.id}>
                        <Link to={`/food/${food.id}`}>
                            <img
                                className={classes.image}  // Correctly set className as a prop
                                src={`/foods/${food.imageUrl}`}
                                alt={food.name}
                            />
                        </Link>
                        <div className={classes.content}>
                            <div className={classes.name}>{food.name}</div>
                            <span
                                className={`${classes.favorite} ${food.favorite ? '' : classes.not
                                    }`}
                            >
                                ❤
                            </span>
                            <div className={classes.stars}>
                                <StarRating stars={foods.stars} />
                            </div>
                            <div className={classes.product_item_footer}>
                                <div className={classes.origins}>
                                    {food.origins.map(origin => (
                                        <span key={origin}>{origin}</span>
                                    ))}
                                </div>
                                <div className={classes.cook_time}>
                                    <span>🕒</span>
                                    {food.cookTime}
                                </div>
                            </div>
                            <div className={classes.price}>
                                <Price price={food.price} />
                            </div>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}
