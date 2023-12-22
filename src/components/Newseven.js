
import React, { useState } from 'react';

export default function Newseven() {
    const [selectedOption, setSelectedOption] = useState('monthly');

    const handleButtonClick = (option) => {
        setSelectedOption(option);
    };
    return (
        <div className='sectioneightmainMAIN'>
            <div className='sectioneightmain1'>
                <div className='sectioneightmain00'>

                    <div className='eightbutton9'>
                       



                        <button
                            className={`eightbutton19 ${selectedOption === 'monthly' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('monthly')}
                        >
                            <h2>Monthly Billing</h2>
                        </button>
                        <button
                            className={`eightbutton19 ${selectedOption === 'annual' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('annual')}
                        >
                            <h2>Annual Billing</h2>
                        </button>
                    </div>
                </div>
                <div className='newseveninputmainpro'>
                    <div className='topninediv'>
                        <div className='firstboxdiv2'>
                            <div className='firstboxdiv12'>
                                <div className='firstboxdiv112'>

                                </div>
                            </div>
                            <h1>Cloud 1</h1>

                        </div>

                        <div className='seconddivbox'>
                            <img alt=' ' src="./media/15.svg" />
                            <h1>16 GB RAM</h1>

                        </div>

                        <div className='seconddivbox'>
                            <img alt=' ' src="./media/15.svg" />
                            <h1>6 vCPU</h1>

                        </div>

                        <div className='seconddivbox'>
                            <img alt=' ' src="./media/15.svg" />
                            <h1>320 GB SSD</h1>

                        </div>

                        <div className='fivedivboxmain'>
                            <div className='fivedivboxmain1'>
                                <h1> Rs</h1>
                                <h2>7215.25</h2>
                                <h3>/ Month</h3>
                            </div>
                            <div className='fivedivboxmain2'>
                                <h1> 7595.00/month</h1>
                                <div className='fivedivboxmain2110'>
                                    <h4>05% OFF</h4>
                                </div>
                            </div>
                        </div>

                        <button className='tablebutton0'>
                            <h1>
                                Choose Plan
                            </h1>
                        </button>


                    </div>
                    <br />
                    <div className='newseveninputmain'>
                        <div className='newseveninputmain1'>
                            <h1>
                                4 TB
                            </h1>
                            <h2> Bandwidth</h2>
                        </div>
                        <div className='newseveninputmain1'>
                            <h1>
                                99.99%
                            </h1>
                            <h2> Bandwidth</h2>
                        </div>
                        <div className='newseveninputmain1'>
                            <h1>
                                Free
                            </h1>
                            <h2> Bandwidth</h2>
                        </div>
                    </div><br />
                    <div className='newseveninputmain'>
                        <div className='newseveninputmain1'>
                            <h1>
                                4 TB
                            </h1>
                            <h2> Bandwidth</h2>
                        </div>
                        <div className='newseveninputmain1'>
                            <h1>
                                99.99%
                            </h1>
                            <h2> Bandwidth</h2>
                        </div>
                        <div className='newseveninputmain1'>
                            <h1>
                                Free
                            </h1>
                            <h2> Bandwidth</h2>
                        </div>
                    </div><br />
                    <div className='servcemain'>
                        <h1>
                            Servers available:
                        </h1>
                        <div className='servcemain1'></div>
                        <div className='servcemain1'></div>
                        <div className='servcemain1'></div>
                        <div className='servcemain1'></div>
                        <div className='servcemain1'></div>
                        <div className='servcemain1'></div>
                        <div className='servcemain1'></div>

                    </div>
                </div>
                <br />


                <table>
                    <tbody>
                        <tr className='tablerow'>
                            <td>
                                <div className='firstboxdiv2 '>
                                    <div className='firstboxdiv12'>

                                    </div>
                                    <h1>Cloud 1</h1>

                                </div>
                            </td>

                            <td>
                                <div className='seconddivbox'>
                                    <img alt=' ' src="./media/15.svg" />
                                    <h1>16 GB RAM</h1>

                                </div>
                            </td>
                            <td>
                                <div className='seconddivbox'>
                                    <img alt=' ' src="./media/15.svg" />
                                    <h1>6 vCPU</h1>

                                </div>
                            </td>
                            <td>
                                <div className='seconddivbox'>
                                    <img alt=' ' src="./media/15.svg" />
                                    <h1>320 GB SSD</h1>

                                </div>
                            </td>
                            <td>
                                <div className='fivedivboxmain'>
                                    <div className='fivedivboxmain1'>
                                        <h1> Rs</h1>
                                        <h2>7215.25</h2>
                                        <h3>/ Month</h3>
                                    </div>
                                    <div className='fivedivboxmain2'>
                                        <h1> 7595.00/month</h1>
                                        <div className='fivedivboxmain2110'>
                                            <h4>05% OFF</h4>
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <button className='tablebutton0'>
                                    <h1>
                                        Choose Plan
                                    </h1>
                                </button>
                            </td>
                        </tr>


                        <br />


                        <tr className='tablerow'>
                            <td>
                                <div className='firstboxdiv2 '>
                                    <div className='firstboxdiv12'>

                                    </div>
                                    <h1>Cloud 1</h1>

                                </div>
                            </td>

                            <td>
                                <div className='seconddivbox'>
                                    <img alt=' ' src="./media/15.svg" />
                                    <h1>16 GB RAM</h1>

                                </div>
                            </td>
                            <td>
                                <div className='seconddivbox'>
                                    <img alt=' ' src="./media/15.svg" />
                                    <h1>6 vCPU</h1>

                                </div>
                            </td>
                            <td>
                                <div className='seconddivbox'>
                                    <img alt=' ' src="./media/15.svg" />
                                    <h1>320 GB SSD</h1>

                                </div>
                            </td>
                            <td>
                                <div className='fivedivboxmain'>
                                    <div className='fivedivboxmain1'>
                                        <h1> Rs</h1>
                                        <h2>7215.25</h2>
                                        <h3>/ Month</h3>
                                    </div>
                                    <div className='fivedivboxmain2'>
                                        <h1> 7595.00/month</h1>
                                        <div className='fivedivboxmain2110'>
                                            <h4>05% OFF</h4>
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <button className='tablebutton0'>
                                    <h1>
                                        Choose Plan
                                    </h1>
                                </button>
                            </td>
                        </tr>



                        <br />
                        <tr className='tablerow'>
                            <td>
                                <div className='firstboxdiv2 '>
                                    <div className='firstboxdiv12'>

                                    </div>
                                    <h1>Cloud 1</h1>

                                </div>
                            </td>

                            <td>
                                <div className='seconddivbox'>
                                    <img alt=' ' src="./media/15.svg" />
                                    <h1>16 GB RAM</h1>

                                </div>
                            </td>
                            <td>
                                <div className='seconddivbox'>
                                    <img alt=' ' src="./media/15.svg" />
                                    <h1>6 vCPU</h1>

                                </div>
                            </td>
                            <td>
                                <div className='seconddivbox'>
                                    <img alt=' ' src="./media/15.svg" />
                                    <h1>320 GB SSD</h1>

                                </div>
                            </td>
                            <td>
                                <div className='fivedivboxmain'>
                                    <div className='fivedivboxmain1'>
                                        <h1> Rs</h1>
                                        <h2>7215.25</h2>
                                        <h3>/ Month</h3>
                                    </div>
                                    <div className='fivedivboxmain2'>
                                        <h1> 7595.00/month</h1>
                                        <div className='fivedivboxmain2110'>
                                            <h4>05% OFF</h4>
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <button className='tablebutton0'>
                                    <h1>
                                        Choose Plan
                                    </h1>
                                </button>
                            </td>
                        </tr>


                        <br />


                        <tr className='tablerow'>
                            <td>
                                <div className='firstboxdiv2 '>
                                    <div className='firstboxdiv12'>

                                    </div>
                                    <h1>Cloud 1</h1>

                                </div>
                            </td>

                            <td>
                                <div className='seconddivbox'>
                                    <img alt=' ' src="./media/15.svg" />
                                    <h1>16 GB RAM</h1>

                                </div>
                            </td>
                            <td>
                                <div className='seconddivbox'>
                                    <img alt=' ' src="./media/15.svg" />
                                    <h1>6 vCPU</h1>

                                </div>
                            </td>
                            <td>
                                <div className='seconddivbox'>
                                    <img alt=' ' src="./media/15.svg" />
                                    <h1>320 GB SSD</h1>

                                </div>
                            </td>
                            <td>
                                <div className='fivedivboxmain'>
                                    <div className='fivedivboxmain1'>
                                        <h1> Rs</h1>
                                        <h2>7215.25</h2>
                                        <h3>/ Month</h3>
                                    </div>
                                    <div className='fivedivboxmain2'>
                                        <h1> 7595.00/month</h1>
                                        <div className='fivedivboxmain2110'>
                                            <h4>05% OFF</h4>
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <button className='tablebutton0'>
                                    <h1>
                                        Choose Plan
                                    </h1>
                                </button>
                            </td>
                        </tr>



                        <br />


                        <tr className='tablerow'>
                            <td>
                                <div className='firstboxdiv2 '>
                                    <div className='firstboxdiv12'>

                                    </div>
                                    <h1>Cloud 1</h1>

                                </div>
                            </td>

                            <td>
                                <div className='seconddivbox'>
                                    <img alt=' ' src="./media/15.svg" />
                                    <h1>16 GB RAM</h1>

                                </div>
                            </td>
                            <td>
                                <div className='seconddivbox'>
                                    <img alt=' ' src="./media/15.svg" />
                                    <h1>6 vCPU</h1>

                                </div>
                            </td>
                            <td>
                                <div className='seconddivbox'>
                                    <img alt=' ' src="./media/15.svg" />
                                    <h1>320 GB SSD</h1>

                                </div>
                            </td>
                            <td>
                                <div className='fivedivboxmain'>
                                    <div className='fivedivboxmain1'>
                                        <h1> Rs</h1>
                                        <h2>7215.25</h2>
                                        <h3>/ Month</h3>
                                    </div>
                                    <div className='fivedivboxmain2'>
                                        <h1> 7595.00/month</h1>
                                        <div className='fivedivboxmain2110'>
                                            <h4>05% OFF</h4>
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <button className='tablebutton0'>
                                    <h1>
                                        Choose Plan
                                    </h1>
                                </button>
                            </td>
                        </tr>



                        <br />

                        <tr className='tablerow'>
                            <td>
                                <div className='firstboxdiv2 '>
                                    <div className='firstboxdiv12'>

                                    </div>
                                    <h1>Cloud 1</h1>

                                </div>
                            </td>

                            <td>
                                <div className='seconddivbox'>
                                    <img alt=' ' src="./media/15.svg" />
                                    <h1>16 GB RAM</h1>

                                </div>
                            </td>
                            <td>
                                <div className='seconddivbox'>
                                    <img alt=' ' src="./media/15.svg" />
                                    <h1>6 vCPU</h1>

                                </div>
                            </td>
                            <td>
                                <div className='seconddivbox'>
                                    <img alt=' ' src="./media/15.svg" />
                                    <h1>320 GB SSD</h1>

                                </div>
                            </td>
                            <td>
                                <div className='fivedivboxmain'>
                                    <div className='fivedivboxmain1'>
                                        <h1> Rs</h1>
                                        <h2>7215.25</h2>
                                        <h3>/ Month</h3>
                                    </div>
                                    <div className='fivedivboxmain2'>
                                        <h1> 7595.00/month</h1>
                                        <div className='fivedivboxmain2110'>
                                            <h4>05% OFF</h4>
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <button className='tablebutton0'>
                                    <h1>
                                        Choose Plan
                                    </h1>
                                </button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

