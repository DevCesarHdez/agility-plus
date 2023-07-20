import Card from "../Card/Card";

const Layout = ({children}) => {
	return <>
		<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
			{children}
		</div>
	</>
}

export default Layout