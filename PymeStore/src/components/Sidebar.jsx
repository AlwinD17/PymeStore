import React from 'react';
import { FaHome, FaShoppingBag, FaClipboardList, FaUsers, FaTruck, FaMoneyBill } from 'react-icons/fa';

const Sidebar = ({sidebarToggle}) => {
  return (
    <div className={`${sidebarToggle? " hidden " : " block "}w-64 bg-gray-600 fixed h-full px-4 py-2`}>
        <div className='my-2 mb-4'>
            <h1 className='text-2x text-white font-bold'>Admin Dashboard</h1>
        </div>
        <hr />
        <ul className='mt-3 text-white font-bold'>
            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                <a href="" className='px-3'>
                    <FaHome className='inline-block w-6 h-6 mr-2 -mt-2'></FaHome>
                    Home
                </a>
            </li>
            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                <a href="" className='px-3'>
                    <FaShoppingBag className='inline-block w-6 h-6 mr-2 -mt-2'></FaShoppingBag>
                    Productos
                </a>
            </li>
            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                <a href="" className='px-3'>
                    <FaClipboardList className='inline-block w-6 h-6 mr-2 -mt-2'></FaClipboardList>
                    Pedidos
                </a>
            </li>
            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                <a href="" className='px-3'>
                    <FaUsers className='inline-block w-6 h-6 mr-2 -mt-2'></FaUsers>
                    Clientes
                </a>
            </li>
            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                <a href="" className='px-3'>
                    <FaTruck className='inline-block w-6 h-6 mr-2 -mt-2'></FaTruck>
                    Envíos
                </a>
            </li>
            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                <a href="" className='px-3'>
                    <FaMoneyBill className='inline-block w-6 h-6 mr-2 -mt-2'></FaMoneyBill>
                    Pagos
                </a>
            </li>
        </ul>
    </div>
  );
};

export default Sidebar;
