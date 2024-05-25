import logo from './sneaker_logo.svg';
import price from './Price.svg';
import favorite from './favorite.svg';
import profile from './Profile.svg';


function App() {
  return (
    <div className="wrapper clear">
			<header id="header_id" className="header_class">

				<div className="left_side_logo">
					<div className="logo_block">
						<img className='logo_svg' src={logo} />
					</div>
					<div className="company_name">
						<h3 className="company_tittle">Flxr Sneakers</h3>
						<p className="company_descrt">Магазин лучших кроссовок</p>
					</div>
				</div>

				<div className="right_side_menu">
					<ul className="menu_list">
						<li className="list_item price">
							<img className='list_item_icon price' src={price} />
							<p className="list_item_text_price">1205 руб.</p>
						</li>
						<li className="list_item">
							<img className='list_item_icon favorite' src={favorite} />
							<p className="list_item_text">Закладки</p>
						</li>
						<li className="list_item">
							<img className='list_item_icon profile' src={profile} />
							<p className="list_item_text">Профиль</p>
						</li>
					</ul>
				</div>

			</header>

			<section id='body'>
				<h1 className="body_tittle">Все кроссовки</h1>
				<div className="card_row d-flex">

				<div className="card_wrapper d-flex flex-column justify-center">
					<div className="img_wrapper d-flex justify-center pos-r">
						<button className="like_btn_wrapper pos-a">
							<img src='/img/card/heart.svg' alt="Buy best shoes" className="like_btn_img" />
						</button>
						<img className='shoes' src={'/img/card/1.jpeg'}/>
					</div>

					<div className="descr_wrapper">
						<p className="shoes_descr">Мужские Кроссовки Nike Balzer Mid Suede</p>
						<div className="wrapper_for_pricetag d-flex justify-between mt-25">
						<div className="price_wrapper d-flex flex-column">
							<span className='card_price_text'>Цена:</span>
							<b className='card_price'>12 999 руб.</b>	
						</div>
						<button className="add_btn">
							<img src='/img/card/plus.svg' style={{height: '22px', width: '22px'}} alt="Add shoes which you would like to buy" className="add_btn_img" />
						</button>
						</div>
					</div>
				</div>

				<div className="card_wrapper d-flex flex-column justify-center">
					<div className="img_wrapper d-flex justify-center pos-r">
						<button className="like_btn_wrapper pos-a">
							<img src='/img/card/heart.svg' alt="Buy best shoes" className="like_btn_img" />
						</button>
						<img className='shoes' src={'/img/card/1.jpeg'}/>
					</div>

					<div className="descr_wrapper">
						<p className="shoes_descr">Мужские Кроссовки Nike Balzer Mid Suede</p>
						<div className="wrapper_for_pricetag d-flex justify-between mt-25">
						<div className="price_wrapper d-flex flex-column">
							<span className='card_price_text'>Цена:</span>
							<b className='card_price'>12 999 руб.</b>	
						</div>
						<button className="add_btn">
							<img src='/img/card/plus.svg' style={{height: '22px', width: '22px'}} alt="Add shoes which you would like to buy" className="add_btn_img" />
						</button>
						</div>
					</div>
				</div>

				<div className="card_wrapper d-flex flex-column justify-center">
					<div className="img_wrapper d-flex justify-center pos-r">
						<button className="like_btn_wrapper pos-a">
							<img src='/img/card/heart.svg' alt="Buy best shoes" className="like_btn_img" />
						</button>
						<img className='shoes' src={'/img/card/1.jpeg'}/>
					</div>

					<div className="descr_wrapper">
						<p className="shoes_descr">Мужские Кроссовки Nike Balzer Mid Suede</p>
						<div className="wrapper_for_pricetag d-flex justify-between mt-25">
						<div className="price_wrapper d-flex flex-column">
							<span className='card_price_text'>Цена:</span>
							<b className='card_price'>12 999 руб.</b>	
						</div>
						<button className="add_btn">
							<img src='/img/card/plus.svg' style={{height: '22px', width: '22px'}} alt="Add shoes which you would like to buy" className="add_btn_img" />
						</button>
						</div>
					</div>
				</div>

				<div className="card_wrapper d-flex flex-column justify-center">
					<div className="img_wrapper d-flex justify-center pos-r">
						<button className="like_btn_wrapper pos-a">
							<img src='/img/card/heart.svg' alt="Buy best shoes" className="like_btn_img" />
						</button>
						<img className='shoes' src={'/img/card/1.jpeg'}/>
					</div>

					<div className="descr_wrapper">
						<p className="shoes_descr">Мужские Кроссовки Nike Balzer Mid Suede</p>
						<div className="wrapper_for_pricetag d-flex justify-between mt-25">
						<div className="price_wrapper d-flex flex-column">
							<span className='card_price_text'>Цена:</span>
							<b className='card_price'>12 999 руб.</b>	
						</div>
						<button className="add_btn">
							<img src='/img/card/plus.svg' style={{height: '22px', width: '22px'}} alt="Add shoes which you would like to buy" className="add_btn_img" />
						</button>
						</div>
					</div>
				</div>

				<div className="card_wrapper d-flex flex-column justify-center">
					<div className="img_wrapper d-flex justify-center pos-r">
						<button className="like_btn_wrapper pos-a">
							<img src='/img/card/heart.svg' alt="Buy best shoes" className="like_btn_img" />
						</button>
						<img className='shoes' src={'/img/card/1.jpeg'}/>
					</div>

					<div className="descr_wrapper">
						<p className="shoes_descr">Мужские Кроссовки Nike Balzer Mid Suede</p>
						<div className="wrapper_for_pricetag d-flex justify-between mt-25">
						<div className="price_wrapper d-flex flex-column">
							<span className='card_price_text'>Цена:</span>
							<b className='card_price'>12 999 руб.</b>	
						</div>
						<button className="add_btn">
							<img src='/img/card/plus.svg' style={{height: '22px', width: '22px'}} alt="Add shoes which you would like to buy" className="add_btn_img" />
						</button>
						</div>
					</div>
				</div>

				<div className="card_wrapper d-flex flex-column justify-center">
					<div className="img_wrapper d-flex justify-center pos-r">
						<button className="like_btn_wrapper pos-a">
							<img src='/img/card/heart.svg' alt="Buy best shoes" className="like_btn_img" />
						</button>
						<img className='shoes' src={'/img/card/1.jpeg'}/>
					</div>

					<div className="descr_wrapper">
						<p className="shoes_descr">Мужские Кроссовки Nike Balzer Mid Suede</p>
						<div className="wrapper_for_pricetag d-flex justify-between mt-25">
						<div className="price_wrapper d-flex flex-column">
							<span className='card_price_text'>Цена:</span>
							<b className='card_price'>12 999 руб.</b>	
						</div>
						<button className="add_btn">
							<img src='/img/card/plus.svg' style={{height: '22px', width: '22px'}} alt="Add shoes which you would like to buy" className="add_btn_img" />
						</button>
						</div>
					</div>
				</div>

				<div className="card_wrapper d-flex flex-column justify-center">
					<div className="img_wrapper d-flex justify-center pos-r">
						<button className="like_btn_wrapper pos-a">
							<img src='/img/card/heart.svg' alt="Buy best shoes" className="like_btn_img" />
						</button>
						<img className='shoes' src={'/img/card/1.jpeg'}/>
					</div>

					<div className="descr_wrapper">
						<p className="shoes_descr">Мужские Кроссовки Nike Balzer Mid Suede</p>
						<div className="wrapper_for_pricetag d-flex justify-between mt-25">
						<div className="price_wrapper d-flex flex-column">
							<span className='card_price_text'>Цена:</span>
							<b className='card_price'>12 999 руб.</b>	
						</div>
						<button className="add_btn">
							<img src='/img/card/plus.svg' style={{height: '22px', width: '22px'}} alt="Add shoes which you would like to buy" className="add_btn_img" />
						</button>
						</div>
					</div>
				</div>

				</div>


			</section>
    </div>
  );
}

export default App;
