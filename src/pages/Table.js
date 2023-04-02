import Navbar from "../components/Navbar"
import {useEffect, useState} from "react";
import UserData from "../components/UserData";
import "../table.css"

const API = "https://fakestoreapi.com/products";

const Table = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.length > 0) {
                setUsers(data);
            }
            console.log(data);
        } catch (e) {
            console.error(e)
        }
    }


    useEffect(() => {
        fetchUsers(API);
    }, [])
    
        return <>
        <div className="py-7 mx-[7rem]"><Navbar/></div>

        <table className="table-fixed ml-10 mr-10">
        <thead className="bg-white border-b mx-6">
            <tr className="mx-6 font-Lora text-lg font-bold text-gray-900 py-4 text-center">
            <th scope="col">
                ID
            </th>
            <th scope="col">
                Title
            </th>
            <th scope="col">
                Price
            </th>
            <th scope="col">
                Description
            </th>
            <th scope="col">
                Add to Basket
            </th>
            </tr>
        </thead>
        <tbody className="font-Lora text-center text-sm">
            <UserData users={users}/>
        </tbody>
        </table>
    </>
    }

    export default Table;

