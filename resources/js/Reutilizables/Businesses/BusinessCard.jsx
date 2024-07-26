import React from "react"
import { Link } from "@inertiajs/react"

const BusinessCard = ({ id, name, owner, person, showLink = true }) => {
  return <div key={`business-${id}`} className="card mb-0 border" style={{ width: '240px', minHeight: '120px' }}>
    <div className="card-body">
      <div className="d-flex align-items-center">
        <div className="flex-grow-1 overflow-hidden">
          <h5 className="mt-0 mb-1 text-truncate">
            <i className='fa fa-building me-1'></i>
            {name}
          </h5>
          <p className="text-muted mb-1 font-13 text-truncate">
            {(`${owner?.name} ${owner?.lastname}`).trim() || 'Sin propietario'}
          </p>
          {
            showLink &&
            <Link href={`/services?business=${person?.document_number}`} className="text-small text-blue"><b>Administrar</b></Link>
          }
        </div>
      </div>
    </div>
  </div>
}

export default BusinessCard