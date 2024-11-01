
import Carousel from 'react-bootstrap/Carousel';
import s from './FadeSlider.module.css'

export default function FadeSlider() {
return <>
        <Carousel data-bs-theme="dark" class={s.slider}>
        <Carousel.Item>
            <img class={s.image}
            className="d-block w-100"
            src="https://www.zoopark-rostov.ru/images/morsk.jpg"
            alt="First slide"
            />
            <Carousel.Caption class={s.box}>
            <h5 class={s.name}>Распродажа джунгариков</h5>
            <p class={s.subname}>Мы устроили гениальную распродажу, успейте купить!</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img class={s.image}
            className="d-block w-100"
            src="https://ireland.apollo.olxcdn.com/v1/files/hx4hvuyfi9uz-UA/image"
            alt="Second slide"
            />
            <Carousel.Caption class={s.box}>
            <h5 class={s.name}>Сумашедшие скидки</h5>
            <p class={s.subname}>Покупайте у нас со скидками до 40%</p>
            </Carousel.Caption>
        </Carousel.Item>
        
        </Carousel>
    </>
}