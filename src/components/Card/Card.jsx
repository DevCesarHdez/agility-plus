import useCard from "../../hook/useCard";

const Card = ({ name, status, species, imgAvatar }) => {
	const { bgStatus } = useCard({ status });
	return <div className="col">
		<div className="card border-0 bg-image-card-top">
			<div className="card-body bg-light rounded-top mt-5 pt-5 position-relative">
				<div className="position-absolute top-0 translate-middle-top d-flex">
					<img src={imgAvatar} alt={name} className="avatar-card border border-light rounded-circle" />
					<p className="mb-0 ms-2 align-self-end">
						<span className={`badge rounded-circle ${bgStatus} p-1`}><span className="visually-hidden">{status}</span></span>
						<span className="align-middle ms-2">{status}</span>
					</p>
				</div>
				<h5 className="title">{name}</h5>
			</div>
		</div>
	</div>
}

export default Card;