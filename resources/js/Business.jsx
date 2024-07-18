
import Tippy from '@tippyjs/react'
import React, { useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import CreateReactScript from './Utils/CreateReactScript.jsx'
import ReactAppend from './Utils/ReactAppend.jsx'
import BusinessRest from './actions/BusinessRest.js'
import Adminto from './components/Adminto.jsx'
import Modal from './components/Modal.jsx'
import Table from './components/Table.jsx'
import InputFormGroup from './components/form/InputFormGroup.jsx'
import TextareaFormGroup from './components/form/TextareaFormGroup.jsx'
import TippyButton from './components/form/TippyButton.jsx'

const businessRest = new BusinessRest();

const Business = ({ businesses, session, can }) => {
  const gridRef = useRef()
  const modalRef = useRef()

  // Form elements ref
  const idRef = useRef()
  const rucRef = useRef()
  const nameRef = useRef()
  const tradenameRef = useRef()
  const webUrlRef = useRef()
  const messageRef = useRef()
  // const descriptionRef = useRef()
  const contactNameRef = useRef()
  const contactPhoneRef = useRef()
  const contactEmailRef = useRef()
  const contactAddressRef = useRef()

  const [isEditing, setIsEditing] = useState(false)
  const [projectLoaded, setProjectLoaded] = useState({})
  const [project2Assign, setProject2Assign] = useState({})
  const [projectsGrid, setProjectsGrid] = useState({})
  const [clientLoaded, setClientLoaded] = useState({})
  const [projects, setProjects] = useState([])

  const onModalOpen = (data) => {
    if (data?.id) setIsEditing(true)
    else setIsEditing(false)

    $('[href="#client-data"]').addClass('active')
    $('[href="#contact-data"]').removeClass('active')

    $('#client-data').addClass('active')
    $('#contact-data').removeClass('active')

    idRef.current.value = data?.id || null
    rucRef.current.value = data?.ruc || null
    nameRef.current.value = data?.name || null
    tradenameRef.current.value = data?.tradename || null
    webUrlRef.current.value = data?.web_url || null
    messageRef.current.value = data?.message || 'Cliente creado desde Atalaya'
    // descriptionRef.current.value = data?.description || null
    contactNameRef.current.value = data?.contact_name || null
    contactPhoneRef.current.value = data?.contact_phone || null
    contactEmailRef.current.value = data?.contact_email || null
    contactAddressRef.current.value = data?.contact_address || null

    $(modalRef.current).modal('show')
  }

  const onModalSubmit = async (e) => {
    e.preventDefault()

    const request = {
      id: idRef.current.value || undefined,
      ruc: rucRef.current.value,
      name: nameRef.current.value,
      tradename: tradenameRef.current.value,
      web_url: webUrlRef.current.value,
      message: messageRef.current.value ?? 'Cliente creado desde Atalaya',
      // description: descriptionRef.current.value ?? '',
      contact_name: contactNameRef.current.value ?? '',
      contact_phone: contactPhoneRef.current.value ?? '',
      contact_email: contactEmailRef.current.value ?? '',
      contact_address: contactAddressRef.current.value ?? '',
      status_id: !idRef.current.value ? 12 : undefined
    }

    const result = await businessRest.save(request)
    if (!result) return

    $(gridRef.current).dxDataGrid('instance').refresh()
    $(modalRef.current).modal('hide')
  }

  const onStatusChange = async ({ id, status }) => {
    const result = await businessRest.status({ id, status })
    if (!result) return
    $(gridRef.current).dxDataGrid('instance').refresh()
  }

  const onDeleteClicked = async (id) => {
    const result = await businessRest.delete(id)
    if (!result) return
    $(gridRef.current).dxDataGrid('instance').refresh()
  }

  const onAssignLeadClicked = async (client_id, assign) => {
    const result = await businessRest.assign(client_id, assign)
    if (!result) return
    $(gridRef.current).dxDataGrid('instance').refresh()
  }

  return (<>
    <div className='row align-items-center justify-content-center' style={{ height: 'calc(100vh - 150px)' }}>
      <div className="col-auto">
        <div class="card mb-0">
          <h5 class="card-header">Selecciona la empresa que deseas administrar</h5>
          <div class="card-body d-flex gap-2 justify-content-center">
            <div class="card mb-0 border" style={{ width: '240px', minHeight: '120px', cursor: 'pointer' }} onClick={onModalOpen}>
              <div class="card-body d-flex gap-2 align-items-center justify-content-center flex-column">
                <i className='fa fa-plus'></i>
                <div> Crear empresa</div>
              </div>
            </div>
            {
              businesses.map(business => (<>
                <div class="card mb-0 border" style={{ width: '240px', minHeight: '120px' }}>
                  <div class="card-body">
                    <div class="d-flex align-items-center">
                      <div class="flex-grow-1 overflow-hidden">
                        <h5 class="mt-0 mb-1 text-truncate">
                          <i className='fa fa-plus me-1'></i>
                          Crear empresa
                        </h5>
                        <p class="text-muted mb-1 font-13 text-truncate">Tuyo</p>
                        <a href='' class="text-small text-blue"><b>Administrar</b></a>
                      </div>
                    </div>
                  </div>
                </div>
              </>))
            }
          </div>
        </div>
      </div>
    </div>
    <Modal modalRef={modalRef} title={isEditing ? 'Editar empresa' : 'Agregar empresa'} onSubmit={onModalSubmit} size='md'>
      <input ref={idRef} type='hidden' />
      <ul className="nav nav-pills navtab-bg nav-justified">
        <li className="nav-item">
          <Tippy content='Datos de la empresa'>
            <a href="#client-data" data-bs-toggle="tab" aria-expanded="false" className="nav-link active">
              Empresa
            </a>
          </Tippy>
        </li>
        <li className="nav-item">
          <Tippy content='Datos del propietario'>
            <a href="#contact-data" data-bs-toggle="tab" aria-expanded="true" className="nav-link">
              Propietario
            </a>
          </Tippy>
        </li>
      </ul>
      <div className="tab-content">
        <div className="tab-pane active" id="client-data">
          <div className="row">
            <InputFormGroup eRef={rucRef} label='RUC' col='col-4' required />
            <InputFormGroup eRef={tradenameRef} label='Nombre comercial' col='col-8' required />
            <InputFormGroup eRef={nameRef} label='Razon social' col='col-md-6' required />
            <InputFormGroup eRef={webUrlRef} label='URL Web' col='col-md-6' />
            <TextareaFormGroup eRef={messageRef} label='Mensaje' col='col-12' required />
            {/* <TextareaFormGroup eRef={descriptionRef} label='Descripcion' col='col-12' /> */}
          </div>
        </div>
        <div className="tab-pane show" id="contact-data">
          <div className="row">
            <InputFormGroup eRef={contactNameRef} label='Nombre de contacto' col='col-6' />
            <InputFormGroup eRef={contactPhoneRef} label='Celular de contacto' type="tel" col='col-6' />
            <InputFormGroup eRef={contactEmailRef} label='Email de contacto' col='col-12' type='email' />
            <TextareaFormGroup eRef={contactAddressRef} label='Direccion de contacto' col='col-12' />
          </div>
        </div>
      </div>
    </Modal>
  </>
  )
};

CreateReactScript((el, properties) => {
  // if (!properties.can('clients', 'root', 'all', 'list')) return location.href = '/';
  createRoot(el).render(
    <Adminto {...properties} title='Empresas'>
      <Business {...properties} />
    </Adminto>
  );
})