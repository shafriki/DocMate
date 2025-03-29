import React from 'react';

const page = () => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-lg'>
                            <th>SL No.</th>
                            <th>Doctor Name</th>
                            <th>Category</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>
                                <h2 className='font-bold'>01</h2>
                            </td>
                            <td>
                                <h2 className='text-base font-semibold'>Manuel nauer</h2>
                            </td>
                            <td>
                                <h2 className='text-base text-blue-700 font-semibold'>Neuro</h2>
                            </td>
                            <td className='text-base'>abc@gmail.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default page;