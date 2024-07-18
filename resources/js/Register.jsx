import { createRoot } from 'react-dom/client'
import React, { useEffect, useRef, useState } from 'react'
import JSEncrypt from 'jsencrypt'
import '../css/login.css'
import CreateReactScript from './Utils/CreateReactScript'
import ReCAPTCHA from 'react-google-recaptcha'
import AuthRest from './actions/AuthRest'

const Login = ({ PUBLIC_RSA_KEY, NOCAPTCHA_SITEKEY, token }) => {

  document.title = 'Registro | Atalaya'

  const jsEncrypt = new JSEncrypt()
  jsEncrypt.setPublicKey(PUBLIC_RSA_KEY)

  // Estados
  const [loading, setLoading] = useState(true)
  const [captchaValue, setCaptchaValue] = useState(null)

  const formRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const loadingRef = useRef()

  // Onload
  window.onload = async () => {
    setLoading(false)
  }

  // const onForgotPasswordClicked = async (e) => {
  //   location.href = './forgot-password'
  // }

  useEffect(() => {
    StartYeti()
    emailRef.current.value = null
  }, [null])

  const onLoginSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const email = emailRef.current.value
    const password = passwordRef.current.value

    const request = {
      email: jsEncrypt.encrypt(email),
      password: jsEncrypt.encrypt(password),
      _token: token
    }
    const result = await AuthRest.login(request)

    if (result) location.href = './home';
    setLoading(false)
  }

  return (
    <>
      <div ref={loadingRef} id="loader" style={{ display: loading ? 'flex' : 'none' }}>
        <span></span>
      </div>
      <div id="main">
        <span id="square"></span>
        <span id="triangle"></span>
        <form
          ref={formRef}
          method='POST'
          action='./login'
          className='form'
          autoComplete='off'
          onSubmit={onLoginSubmit}>
          <div className="form-header">
            <h2 className='form-title !mt-0'>Atalaya</h2>
            <p className='form-description'>Formulario de registro</p>
          </div>
          <div className="form-body md:grid md:grid-cols-2 gap-4">
            <div>
              <input
                className='form-control'
                autoComplete='off'
                ref={emailRef}
                id='name'
                required />
              <label className='form-label' htmlFor="name">Nombres</label>
            </div>
            <div>
              <input
                className='form-control'
                autoComplete='off'
                ref={emailRef}
                id='lastname'
                required />
              <label className='form-label' htmlFor="lastname">Apellidos</label>
            </div>
            <div className="col-span-2">
              <input
                className='form-control !w-full'
                autoComplete='off'
                ref={emailRef}
                id='email'
                required />
              <label className='form-label' htmlFor="email">Correo de recuperacion</label>
            </div>
            <div>
              <input
                className='form-control'
                autoComplete='off'
                ref={passwordRef}
                id="password"
                type='password'
                required />
              <label className='form-label' htmlFor="password">Contraseña</label>
            </div>
            <div>
              <input
                className='form-control'
                autoComplete='off'
                ref={passwordRef}
                id="confirm"
                type='password'
                required />
              <label className='form-label' htmlFor="confirm">Confirmar contraseña</label>
            </div>
            <div className="col-span-2">
              <button id="btn_submit" type="submit">
                Iniciar sesion
              </button>
            </div>
          </div>
          {/* <div className="form-footer">
                        <button
                            id="btn_forgot"
                            type="button"
                            onClick={onForgotPasswordClicked}>
                            Olvide mi contraseña
                        </button>
                    </div> */}
        </form>
        <ReCAPTCHA className="z-40" sitekey={NOCAPTCHA_SITEKEY} onChange={setCaptchaValue} size='invisible' />
        <a id="copyright" href="//mundoweb.pe" target="_blank">
          Propiedad de Mundo Web
        </a>
      </div>
    </>
  )
};

CreateReactScript((el, properties) => {
  createRoot(el).render(<Login {...properties} />);
})