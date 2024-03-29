/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './aboutFilmPage.scss'
import AddButton from '../../UI/AddButton';

//be634f3e-0f65-4b41-b7db-5f4e73ef8949
const AboutFilmPage = () => {
  const { id } = useParams()
  const [post, setPost] = useState<any>([])
  const [money, setMoney] = useState<any>([])
  const [staff, setStaff] = useState<any>([])
  useEffect(() => {

    fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': '89816edc-48ec-4f94-b2ee-0e59946b6d75',
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => setPost(res))


    fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/box_office`, {
      method: 'GET',
      headers: {
        'X-API-KEY': '89816edc-48ec-4f94-b2ee-0e59946b6d75',
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => setMoney(res))

    fetch(`https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${id}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': '89816edc-48ec-4f94-b2ee-0e59946b6d75',
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => setStaff(res))
  }, [id])
  console.log(post)

  if (post.length === 0) {
    return <h1>Идет загрузка...</h1>
  }

  function filterStuff(worker: string) {
   let filStuff: any = [];
   staff?.map((item: any) => item.professionText === worker && item.nameRu !== '' ? filStuff.push(item.nameRu) : '')
    return filStuff.join(', ')
  }

  return (
    <div className='post'>
      <div className="poster">
        <img className='poster-img' src={post.posterUrlPreview} alt="poster" />
      </div>

      <div className="wrapper">

        <div className="main">
          <div className="title">
            <div className='title-nameRu'>{post.nameRu} ({post.year})</div>
            <div className='title-nameEn'>{post.nameOriginal} +{post.ratingAgeLimits?.split('').filter((item: any) => Number(item)).join('')}</div>
            <AddButton key={id} id={Number(id)} />
          </div>
          <h2 className='title-info'>О фильме</h2>
          <div className="styles_column">

            <div className="styles_rowDark">
              <div className="styles_titleDark">Страна</div>
              <div className="styles_valueDark">{post.countries?.map((item: any) => item.country).join(', ')}</div>
            </div>
            <div className="styles_rowDark">
              <div className="styles_titleDark">Жанр</div>
              <div className="styles_valueDark">{post.genres?.map((item: any) => item.genre).join(', ')}</div>
            </div>

            <div className="styles_rowDark">
              <div className="styles_titleDark">Слоган</div>
              <div className="styles_valueDark">{post.slogan}</div>
            </div>

            <div className="styles_rowDark">
              <div className="styles_titleDark">Режиссёр</div>
              <div className="styles_valueDark">{staff[0]?.nameRu}</div>
            </div>

            <div className="styles_rowDark">
              <div className="styles_titleDark">Сценарист</div>
              <div className="styles_valueDark">{filterStuff('Сценаристы')}</div>
            </div>

            <div className="styles_rowDark">
              <div className="styles_titleDark">Продюсеры</div>
              <div className="styles_valueDark">{filterStuff('Продюсеры')}</div>
            </div>

            <div className="styles_rowDark">
              <div className="styles_titleDark">Художники</div>
              <div className="styles_valueDark">{filterStuff('Художники')}</div>
            </div>

            <div className="styles_rowDark">
              <div className="styles_titleDark">Монтажеры</div>
              <div className="styles_valueDark">{filterStuff('Монтажеры')}</div>
            </div>


            <div className="styles_rowDark">
              <div className="styles_titleDark">Бюджет</div>
              <div className="styles_valueDark">$ {money.items?.map((item: any) => item.type === "BUDGET" ? item.amount : '')}</div>
            </div>


            <div className="styles_rowDark">
              <div className="styles_titleDark">Сборы в США</div>
              <div className="styles_valueDark">$ {money.items?.map((item: any) => item.type === "USA" ? item.amount : '')}</div>
            </div>


            <div className="styles_rowDark">
              <div className="styles_titleDark">Сборы в мире</div>
              <div className="styles_valueDark">$ {money.items?.map((item: any) => item.type === "WORLD" ? item.amount : '')}</div>
            </div>

            <div className="styles_rowDark">
              <div className="styles_titleDark">Время</div>
              <div className="styles_valueDark">{post.filmLength} мин. / {`0${Math.floor(post.filmLength/60)}:${Math.floor(post.filmLength%60)}`}</div>
            </div>

          </div>

        </div>
        <div className="raiting">
          {post.ratingKinopoisk}
          
        </div>
      </div>
    </div>
  )
}

export default AboutFilmPage