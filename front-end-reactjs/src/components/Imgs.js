import React from 'react';
import '../css/imgs.css';
import background_1 from '../img/bg-showcase-1.jpg';
import background_2 from '../img/bg-showcase-2.jpg';
import background_3 from '../img/bg-showcase-3.jpg';

/**
 * component have img in the right and decription in the left
 * @param {object} props 
 * key {int} id of content. Contents that have same id just have one shown
 * img {Link} image in the right
 * title {string} title of decription
 * subtitle {string} dicription
 */
function ImgRight(props) {
	return (
		<div className="row no-gutters">
			<div className="col-lg-6 order-lg-2 text-white showcase-img"
				style={{ backgroundImage: `url(${props.img})` }}></div>
			<div className="col-lg-6 order-lg-1 my-auto showcase-text">
				<h2>{props.title}</h2>
				<p className="lead mb-0">{props.subtitle}</p>
			</div>
		</div>
	);
}

/**
 * component have img in the left and decription in the right
 * @param {object} props 
 * key {int} id of content. Contents that have same id just have one shown
 * img {Link} image in the left
 * title {string} title of decription
 * subtitle {string} dicription
 */
function ImgLeft(props) {
	return (
		<div className="row no-gutters">
			<div className="col-lg-6 order-lg-2 my-auto showcase-text">
				<h2>{props.title}</h2>
				<p className="lead mb-0">{props.subtitle}</p>
			</div>
			<div className="col-lg-6 order-lg-1 text-white showcase-img"
				style={{ backgroundImage: `url(${props.img})` }}></div>
		</div>
	);
}
export default function Imgs(props) {
	const infors = [
		{
			id: 1,
			title: "Sứ mệnh",
			subtitle: "Ứng dụng tiện ích này giúp người dùng lên những kế hoạch học tập cho mình một cách hiệu "
				+ "quả và chính xác, bên cạnh đó họ còn có thể nắm bắt nội dung bài học trên lớp, các kế hoạch học "
				+ "tập của lớp cũng như làm bài tập về nhà mọi lúc mọi nơi đều tiện lợi.",
			img: background_1
		},
		{
			id: 2,
			title: "Giao diện",
			subtitle: "Giao diện được thiết kế đẹp, đơn giản và ổn định. Nhờ đó, người dùng sẽ"
				+ "cảm thấy dễ chịu, thoải mái và phù hợp với mọi đối tượng mỗi khi điện thoại được kết nối mạng.",
			img: background_2
		},
		{
			id: 3,
			title: "Dễ dàng sử dụng",
			subtitle: "Ứng dụng không chỉ có giao diện đơn giản, rõ ràng và dễ sử dụng, "
				+ "nhờ vậy nó trở nên phù hợp với những đối tượng là học sinh trung học, phổ thông và sinh viên hơn, ",
			img: background_3
		},
	];
	return (
		<div className="showcase" id="imgs">
			<div className="container-fluid p-0">
				{infors.map(img => {
					if (img.id % 2 === 0)
						return (<ImgLeft title={img.title} subtitle={img.subtitle} img={img.img} key={img.id} />);
					else return (<ImgRight title={img.title} subtitle={img.subtitle} img={img.img} key={img.id} />);
				})}
			</div>
		</div>
	);
}