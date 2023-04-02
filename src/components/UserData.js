const UserData = ({users}) => {
    return (
        <>
            {
                users.map((curUser) => {
                    const {id, title, price, description} = curUser;

                    return (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{title}</td>
                            <td>{price}</td>
                            <td>{description}</td>
                            <td className="font-Lora text-sm text-gray-900 font-light">
                            <button type="button" className="box-border w-[80px] h-[40px] left-[110px] bg-gray-900 rounded-[10px] border-solid border-black/10 text-white">Add</button>
                            </td>
                        </tr>
                    )
                })
            }
        </>
    )
}
export default UserData;