import { useSelector } from 'react-redux';
import { selectIsLoggin } from '../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

export default function RestrictedRoute({ Component, redirectTo }) {
	const isLogin = useSelector(selectIsLoggin);
	return isLogin ? <Navigate to={redirectTo} /> : Component;
}
