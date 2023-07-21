import useCard from "../../hook/useCard";

const Card = ({ name, initialStatus, species, imgAvatar }) => {
	const { bgStatus, status, handleStatus } = useCard({ initialStatus });
	return <div className="col">
		<div className="card border-0 bg-image-card-top">
			<div className="card-body bg-light rounded-top mt-5 pt-5 position-relative">
				<div className="position-absolute top-0 translate-middle-top d-flex">
					<img src={imgAvatar} alt={name} className="avatar-card border border-5 border-light rounded-circle" />
					<p className="mb-0 ms-2 align-self-end">
						<span className={`badge rounded-circle ${bgStatus} p-1`}><span className="visually-hidden">{status}</span></span>
						<span className="align-middle ms-2">{status}</span>
					</p>
				</div>
				<h5 className="title">{name}</h5>
			</div>
			<div className="card-footer bg-light">
				<div className="row">
          <label htmlFor="status" className="col-auto col-form-label">Estatus</label>
					<div className="col-auto">
            <select className="form-select" name="status" id="status" onChange={handleStatus} value={status}>
              <option value="Alive">Alive</option>
              <option value="Dead">Dead</option>
              <option value="Unknown">Unknown</option>
            </select>
          </div>
				</div>
			</div>
		</div>
	</div>
}

export default Card;