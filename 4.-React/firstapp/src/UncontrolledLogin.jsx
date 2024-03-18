export function UncontrolledLogin () {
    function handleSubmit(event) {
        event.preventDefault()

        const formData = new FormData(event.target)

        const data = {
            username: formData.get("username"),
            password: formData.get("password"),
            section: formData.get("section") === 'on' ? true : false
        }
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>My uncontrolled Login</h3>
            <input name="username" />
            <input name="password" type="password" />
            <input name="section" type="checkbox"/>
            <button>Login</button>
            <button type="reset">Reset</button>
        </form>
    )
}

export default UncontrolledLogin

/* 
*Ventajas de componentes controlados:
-Los componentes controlados ofrecen una forma consistente de manejar los cambios en los valores de entrada, ya que el estado del componente 
se mantiene actualizado con el valor actual de la entrada.
-Pueden ser útiles para implementar formularios con validación en tiempo real, ya que el estado del componente se puede verificar y validar después de 
cada cambio en la entrada.
-Pueden ayudar a prevenir la pérdida de datos en caso de un error de validación o una entrada inválida, ya que el estado del componente no se actualiza 
hasta que se verifique y valide la entrada.

*Desventajas de componentes controlados:
-Pueden requerir más código y ser más verbosos que los componentes no controlados, ya que es necesario mantener el estado del componente y actualizarlo 
manualmente con cada cambio en la entrada.
-Pueden ser más difíciles de implementar y depurar, ya que el flujo de datos es más complejo y el estado del componente debe ser gestionado cuidadosamente.

*Ventajas de componentes no controlados:
-Son más simples y fáciles de implementar que los componentes controlados, ya que no es necesario mantener el estado del componente y actualizarlo manualmente 
con cada cambio en la entrada.
-Pueden ser más eficientes en términos de rendimiento, ya que no es necesario actualizar el estado del componente después de cada cambio en la entrada.

*Desventajas de componentes no controlados:
-No ofrecen una forma consistente de manejar los cambios en los valores de entrada, ya que el estado del componente no se mantiene actualizado con el 
valor actual de la entrada.
-Pueden ser menos adecuados para implementar formularios con validación en tiempo real, ya que el estado del componente no se puede verificar y validar 
después de cada cambio en la entrada.
-Pueden ser más propensos a la pérdida de datos en caso de un error de validación o una entrada inválida, ya que el estado del componente se actualiza 
automáticamente con el valor actual de la entrada. 
*/