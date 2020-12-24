import React from 'react';
import '../css/footer.css';
class Footer extends React.Component {
	render() {
		return (
			// footer
			<footer>
				<div className="container-fluid text-center text-md-left text-white pt-3">
					<div className="row">
						{/* <!--ps--> */}
						<div className="col-md-6 mt-md-0 mt-3 ml-auto">
							<h1 className="text-center">Striker</h1>
							<p>
								Striker giúp học sinh ở bất kỳ cấp độ nào cải thiện khả năng tổ chức
								thời gian và hoàn thành công việc hiệu quả hơn.
														</p>
						</div>
						{/* <!--ps--> */}
						<div className="col-md-4 mb-md-0 mb-3 ml-auto">
							{/*<!-- Links --> */}
							<h3>Liên Hệ</h3>
							<ul className="list-unstyled fa-ul">
								<li>
									<a href="https://www.facebook.com/striker/"
										className="text-white">
										<span className="fa-li">
											<span className="fa fa-facebook"></span>
										</span>
																		Facebook
																</a>
								</li>
								<li>
									<p className="text-white" href="#">
										<span className="fa-li">
											<span className="fa fa-envelope"></span>
										</span>
																				Gmail: striker@gmail.com
																		</p>
								</li>
								<li>
									<p className="text-white">
										<span className="fa-li">
											<span className="fa fa-phone"></span>
										</span>
																		Phone: 0985019306
																		</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
				{/*Copyright */}
				<div className="footer-copyright text-center py-3 text-white"
					style={{ backgroundColor: `rgba(52, 58, 64, 0.2)` }}>©2020 Copyright:
										<a href="https://striker.com/"
						className="text-white">http://striker.com</a>
				</div>
			</footer>
		);
	}
}
export default Footer;