import React from 'react';
import { Link } from 'react-router-dom';

function ServiceItem(props) {
    return (
        <>
            <li className='Cards__item'>
                <Link className='Cards__item__link' to={props.path}>
                    <figure className='Cards__item__pic-wrap' data-category={props.label}>
                        <img
                            className='Cards__item__img'
                            alt='Travel Image'
                            src={props.src}
                        />
                    </figure>
                    <div className='Cards__item__info'>
                        <h5 className='Cards__item__text'>{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default ServiceItem;