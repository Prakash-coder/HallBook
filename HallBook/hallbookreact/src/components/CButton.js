

const loginBtnClass = `relative mx-auto block w-2/6 max-w-xs rounded-full bg-blue-500 px-6 py-4 text-base 
font-medium uppercase leading-tight text-white shadow-md  transition duration-150 ease-in-out hover:bg-blue-700
hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none
focus:ring-0 active:bg-blue-800 active:shadow-lg md:mx-auto md:w-1/6 md:py-3`

function CButton(props) {
  return (
    <button
    id={props.id}
    type={props.type}
    className={loginBtnClass}
    >
        {props.btnDesc}
    </button>
  )
}

export default CButton