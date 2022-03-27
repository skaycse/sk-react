import React from "react";
import { Navigate } from 'react-router';
import { useNavigate } from "react-router-dom";
import Footer from "../footer/footer";
import { getCookie, setCookie } from "../../utils/cookie"
import { validateUser } from '../../utils/localspace'
import { Alert } from "../../utils/alert";

export const Login = () => {
	const [username, setUserName] = React.useState("");
	const [password, setPassword] = React.useState("");
	const navigate = useNavigate();
	const [credNotMatch, setCred] = React.useState(false);

	const checkLogin = async () => {
		if (validateUser(username, password)) {
			const a = await fetch(process.env.REACT_APP_GUID_EXTERNAL_URI)
				.then(res => res.text())
				.then(res => {
					if (res) {
						setCookie('access_token', res)
					}
				})
			navigate('/dashboard');
		}
		else {
			setCred(true)
		}
	};

	const userAccessToken = getCookie('access_token');

	if (userAccessToken) {
		return <Navigate to='/dashboard' />;
	}

	return (
		<div className="card offset-3 col-md-6" style={{ top: "12em" }}>
			<div className="card-body">
				<form>
					<div className="mb-3">
						<label htmlFor="exampleInputEmail1" className="form-label">
							Email address
						</label>
						<input
							value={username}
							onChange={(e) => setUserName(e.target.value)}
							type="text"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
						/>
						<div id="emailHelp" className="form-text">
							We'll never share your email with anyone else.
						</div>
					</div>
					<div className="mb-3">
						<label htmlFor="exampleInputPassword1" className="form-label">
							Password
						</label>
						<input
							type="password"
							className="form-control"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					{/* <div className="mb-3 form-check">
						<input
							type="checkbox"
							className="form-check-input"
							id="exampleCheck1"
						/>
						<label className="form-check-label" htmlFor="exampleCheck1">
							Check me out
						</label>
					</div> */}
					<button
						type="button"
						onClick={checkLogin}
						className="btn btn-primary"
					>
						Submit
					</button>
					<Alert class="warning" show={credNotMatch} msg='Username or password is invalid.' ></Alert>
				</form>
			</div>
		</div>
	);
};
