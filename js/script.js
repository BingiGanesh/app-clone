
function Login() {
    return `<div class="container-fluid p-0">
                <div class="row g-0">
                    <div style="background-color: rgb(0, 0, 0);">
                        <div class="authentication-page-content p-4 d-flex align-items-center min-vh-100 AppContainer">
                            <div class="w-100">
                                <div class="row justify-content-center">
                                    <div class="col-lg-9">
                                        <div>
                                            <div class="text-center">
                                                <div><a href="" class=""><img src="/media/mylo1.png" alt="" height="60"
                                                            class="auth-logo logo-dark mx-auto"><img
                                                            src="/media/mylo1.png" alt="" height="60"
                                                            class="auth-logo logo-light mx-auto"></a></div>
                                                <h4 class="font-size-18 mt-4 text-white">Quick Book App</h4>
                                            </div>
                                            <div class="p-2 mt-2">
                                                <form id="main-form" method="POST" autocomplete="off"
                                                    style="background-color: rgb(0, 0, 0);">
                                                    <!-- <div class="mb-3 auth-form-group-custom mb-4"
                                                        style="background-color: rgb(0, 0, 0);">
                                                        <div class="Login_icon___Ysd_">+91</div>
                                                        <input
                                                            class="form-control" id="user_name"
                                                            placeholder="Enter Mobile Number" type="number" value=""
                                                            name="user_name"
                                                            style="background-color: rgb(0, 0, 0); color: rgb(255, 255, 255);"
                                                        >
                                                    </div> -->
                                                    <div class="mb-3 auth-form-group-custom mb-4"
                                                        style="background-color: rgb(0, 0, 0);">
                                                        <input class="form-control" id="user_name" required
                                                            placeholder="Enter Full Name" type="text" value=""
                                                            name="username"
                                                            style="background-color: rgb(0, 0, 0); color: rgb(255, 255, 255);padding: .47rem .75rem;text-align: center;">
                                                    </div>
                                                    <div class="mt-4 text-center"><button
                                                            class="btn mylo-bg mylo-txt-wt w-md waves-effect waves-light"
                                                            type="submit" id="user-login" fdprocessedid="o5x2rk"><i
                                                                class="fa fa-spin" id="btn-loader"></i> LOGIN</button>
                                                    </div>

                                                </form>
                                            </div>
                                            <div class="mt-5 text-center">
                                                <p class="text-white text_xs">© 2025 Mylo
                                                    Ltd.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
}

function Booking() {
    const activeTab = window.localStorage.getItem('activeTab') || "Thane"
    const today = new Date()
    const date = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate()
    const month = today.getMonth() + 1 < 10 ? `0${today.getMonth() + 1}` : today.getMonth() + 1
    const locations = ['Thane', 'Dahisar', 'Borivali']
    const trips = [
        {
            location: 'Thane',
            buses: [
                {
                    list: [
                        {
                            "pk": 1,
                            "trip_name": "GCorp, Thane to Thane E Stn.",
                            "trip_code": "T1",
                            "trip_type": 2,
                            "trip_time": 2,
                            "pickup_stop": "GCorp, Thane",
                            "drop_stop": "Thane E Stn.",
                            "trip_start_time": "18:30:00",
                            "trip_end_time": "20:00:00",
                            "Vehicle_no": "T1 - Shuttle TBD",
                            "Driver_name": "Jawahar",
                            "seat_count": 47,
                            "sold_out": true,
                            "block_date": false
                        },
                        {
                            "pk": 2,
                            "trip_name": "GCorp, Thane to Thane E Stn.",
                            "trip_code": "T2",
                            "trip_type": 2,
                            "trip_time": 2,
                            "pickup_stop": "GCorp, Thane",
                            "drop_stop": "Thane E Stn.",
                            "trip_start_time": "18:30:00",
                            "trip_end_time": "20:00:00",
                            "Vehicle_no": "T2 - Shuttle TBD",
                            "Driver_name": "Jawahar",
                            "seat_count": 47,
                            "sold_out": true,
                            "block_date": false
                        },
                        {
                            "pk": 3,
                            "trip_name": "GCorp, Thane to Thane E Stn.",
                            "trip_code": "T3",
                            "trip_type": 2,
                            "trip_time": 2,
                            "pickup_stop": "GCorp, Thane",
                            "drop_stop": "Thane E Stn.",
                            "trip_start_time": "18:30:00",
                            "trip_end_time": "20:00:00",
                            "Vehicle_no": "T3 - Shuttle TBD",
                            "Driver_name": "Jawahar",
                            "seat_count": 47,
                            "sold_out": true,
                            "block_date": false
                        },
                        {
                            "pk": 4,
                            "trip_name": "GCorp, Thane to Thane E Stn.",
                            "trip_code": "T4",
                            "trip_type": 2,
                            "trip_time": 2,
                            "pickup_stop": "GCorp, Thane",
                            "drop_stop": "Thane E Stn.",
                            "trip_start_time": "18:30:00",
                            "trip_end_time": "20:00:00",
                            "Vehicle_no": "T4 - Shuttle TBD",
                            "Driver_name": "Jawahar",
                            "seat_count": 47,
                            "sold_out": true,
                            "block_date": false
                        },
                        {
                            "pk": 5,
                            "trip_name": "GCorp, Thane to Thane E Stn.",
                            "trip_code": "T5",
                            "trip_type": 1,
                            "trip_time": 2,
                            "pickup_stop": "GCorp, Thane",
                            "drop_stop": "Thane E Stn.",
                            "trip_start_time": "18:30:00",
                            "trip_end_time": "20:00:00",
                            "Vehicle_no": "T5 - Shuttle TBD",
                            "Driver_name": "Jawahar",
                            "seat_count": 47,
                            "sold_out": true,
                            "block_date": false
                        },
                        {
                            "pk": 6,
                            "trip_name": "GCorp, Thane to Thane E Stn.",
                            "trip_code": "T6",
                            "trip_type": 1,
                            "trip_time": 2,
                            "pickup_stop": "GCorp, Thane",
                            "drop_stop": "Thane E Stn.",
                            "trip_start_time": "18:30:00",
                            "trip_end_time": "20:00:00",
                            "Vehicle_no": "T6 - Shuttle TBD",
                            "Driver_name": "Jawahar",
                            "seat_count": 47,
                            "sold_out": true,
                            "block_date": false
                        },
                    ]
                },
                {
                    list: [
                        {
                            "pk": 7,
                            "trip_name": "GCorp, Thane to Thane E Stn.",
                            "trip_code": "T7",
                            "trip_type": 1,
                            "trip_time": 2,
                            "pickup_stop": "GCorp, Thane",
                            "drop_stop": "Thane E Stn.",
                            "trip_start_time": "18:45:00",
                            "trip_end_time": "20:00:00",
                            "Vehicle_no": "T7 - Shuttle TBD",
                            "Driver_name": "Jawahar",
                            "seat_count": 47,
                            "sold_out": true,
                            "block_date": false
                        },
                        {
                            "pk": 8,
                            "trip_name": "GCorp, Thane to Thane E Stn.",
                            "trip_code": "T8",
                            "trip_type": 1,
                            "trip_time": 2,
                            "pickup_stop": "GCorp, Thane",
                            "drop_stop": "Thane E Stn.",
                            "trip_start_time": "18:45:00",
                            "trip_end_time": "20:00:00",
                            "Vehicle_no": "T8 - Shuttle TBD",
                            "Driver_name": "Jawahar",
                            "seat_count": 47,
                            "sold_out": true,
                            "block_date": false
                        },
                        {
                            "pk": 9,
                            "trip_name": "GCorp, Thane to Thane E Stn.",
                            "trip_code": "T9",
                            "trip_type": 1,
                            "trip_time": 2,
                            "pickup_stop": "GCorp, Thane",
                            "drop_stop": "Thane E Stn.",
                            "trip_start_time": "18:45:00",
                            "trip_end_time": "20:00:00",
                            "Vehicle_no": "T9 - Shuttle TBD",
                            "Driver_name": "Jawahar",
                            "seat_count": 47,
                            "sold_out": true,
                            "block_date": false
                        },

                    ]
                },
                {
                    list: [
                        {
                            "pk": 10,
                            "trip_name": "GCorp, Thane to Thane E Stn.",
                            "trip_code": "T10",
                            "trip_type": 1,
                            "trip_time": 2,
                            "pickup_stop": "GCorp, Thane",
                            "drop_stop": "Thane E Stn.",
                            "trip_start_time": "19:00:00",
                            "trip_end_time": "20:00:00",
                            "Vehicle_no": "T10 - Shuttle TBD",
                            "Driver_name": "Jawahar",
                            "seat_count": 47,
                            "sold_out": true,
                            "block_date": false
                        },
                        {
                            "pk": 11,
                            "trip_name": "GCorp, Thane to Thane E Stn.",
                            "trip_code": "T11",
                            "trip_type": 1,
                            "trip_time": 2,
                            "pickup_stop": "GCorp, Thane",
                            "drop_stop": "Thane E Stn.",
                            "trip_start_time": "19:00:00",
                            "trip_end_time": "20:00:00",
                            "Vehicle_no": "T11 - Shuttle TBD",
                            "Driver_name": "Jawahar",
                            "seat_count": 47,
                            "sold_out": true,
                            "block_date": false
                        },
                        {
                            "pk": 12,
                            "trip_name": "GCorp, Thane to Thane E Stn.",
                            "trip_code": "T12",
                            "trip_type": 1,
                            "trip_time": 2,
                            "pickup_stop": "GCorp, Thane",
                            "drop_stop": "Thane E Stn.",
                            "trip_start_time": "19:00:00",
                            "trip_end_time": "20:00:00",
                            "Vehicle_no": "T12 - Shuttle TBD",
                            "Driver_name": "Jawahar",
                            "seat_count": 47,
                            "sold_out": true,
                            "block_date": false
                        },
                        {
                            "pk": 13,
                            "trip_name": "GCorp, Thane to Thane E Stn.",
                            "trip_code": "T13",
                            "trip_type": 1,
                            "trip_time": 2,
                            "pickup_stop": "GCorp, Thane",
                            "drop_stop": "Thane E Stn.",
                            "trip_start_time": "19:00:00",
                            "trip_end_time": "20:00:00",
                            "Vehicle_no": "T13 - Shuttle TBD",
                            "Driver_name": "Jawahar",
                            "seat_count": 47,
                            "sold_out": true,
                            "block_date": false
                        },

                    ]
                },
                {
                    list: [
                        {
                            "pk": 14,
                            "trip_name": "GCorp, Thane to Thane E Stn.",
                            "trip_code": "T14",
                            "trip_type": 1,
                            "trip_time": 2,
                            "pickup_stop": "GCorp, Thane",
                            "drop_stop": "Thane E Stn.",
                            "trip_start_time": "19:30:00",
                            "trip_end_time": "20:00:00",
                            "Vehicle_no": "T14 - Shuttle TBD",
                            "Driver_name": "Jawahar",
                            "seat_count": 47,
                            "sold_out": true,
                            "block_date": false
                        },
                        {
                            "pk": 15,
                            "trip_name": "GCorp, Thane to Thane E Stn.",
                            "trip_code": "T15",
                            "trip_type": 1,
                            "trip_time": 2,
                            "pickup_stop": "GCorp, Thane",
                            "drop_stop": "Thane E Stn.",
                            "trip_start_time": "19:30:00",
                            "trip_end_time": "20:00:00",
                            "Vehicle_no": "T15 - Shuttle TBD",
                            "Driver_name": "Jawahar",
                            "seat_count": 47,
                            "sold_out": true,
                            "block_date": false
                        },

                    ]
                },
                {
                    list: [
                        {
                            "pk": 16,
                            "trip_name": "GCorp, Thane to Thane E Stn.",
                            "trip_code": "T16",
                            "trip_type": 1,
                            "trip_time": 2,
                            "pickup_stop": "GCorp, Thane",
                            "drop_stop": "Thane E Stn.",
                            "trip_start_time": "20:00:00",
                            "trip_end_time": "21:00:00",
                            "Vehicle_no": "T16 - Shuttle TBD",
                            "Driver_name": "Jawahar",
                            "seat_count": 47,
                            "sold_out": true,
                            "block_date": false
                        },
                        {
                            "pk": 17,
                            "trip_name": "GCorp, Thane to Thane E Stn.",
                            "trip_code": "T17",
                            "trip_type": 1,
                            "trip_time": 2,
                            "pickup_stop": "GCorp, Thane",
                            "drop_stop": "Thane E Stn.",
                            "trip_start_time": "20:00:00",
                            "trip_end_time": "21:00:00",
                            "Vehicle_no": "T17 - Shuttle TBD",
                            "Driver_name": "Jawahar",
                            "seat_count": 47,
                            "sold_out": true,
                            "block_date": false
                        },
                        {
                            "pk": 24,
                            "trip_name": "GCorp, Thane to Thane E Stn.",
                            "trip_code": "T18",
                            "trip_type": 1,
                            "trip_time": 2,
                            "pickup_stop": "GCorp, Thane",
                            "drop_stop": "Thane",
                            "trip_start_time": "20:00:00",
                            "trip_end_time": "21:00:00",
                            "Vehicle_no": "T18 - Shuttle TBD",
                            "Driver_name": "Jawahar",
                            "seat_count": 47,
                            "sold_out": true,
                            "block_date": false
                        }
                    ]
                }
            ]
        },
        {
            location: 'Dahisar',
            buses: [
                {
                    list: [
                        {
                            "pk": 25,
                            "trip_name": "GCorp, Thane to Dahisar Stn.",
                            "trip_code": "D1",
                            "trip_type": 1,
                            "trip_time": 2,
                            "pickup_stop": "GCorp, Thane",
                            "drop_stop": "Dahisar Stn.",
                            "trip_start_time": "18:30:00",
                            "trip_end_time": "20:00:00",
                            "Vehicle_no": "D1 - Shuttle TBD",
                            "Driver_name": "Jawahar",
                            "seat_count": 47,
                            "sold_out": true,
                            "block_date": false
                        }
                    ]
                }
            ]
        },
        {
            location: 'Borivali',
            buses: [
                {
                    list: [
                        {
                            "pk": 19,
                            "trip_name": "GCorp, Thane to Borivali Stn.",
                            "trip_code": "B1",
                            "trip_type": 1,
                            "trip_time": 2,
                            "pickup_stop": "GCorp, Thane",
                            "drop_stop": "Borivali Stn.",
                            "trip_start_time": "18:30:00",
                            "trip_end_time": "20:00:00",
                            "Vehicle_no": "B1 - Shuttle TBD",
                            "Driver_name": "Jawahar",
                            "seat_count": 47,
                            "sold_out": true,
                            "block_date": false
                        },
                        {
                            "pk": 20,
                            "trip_name": "GCorp, Thane to Borivali Stn.",
                            "trip_code": "B2",
                            "trip_type": 1,
                            "trip_time": 2,
                            "pickup_stop": "GCorp, Thane",
                            "drop_stop": "Borivali Stn.",
                            "trip_start_time": "18:30:00",
                            "trip_end_time": "20:00:00",
                            "Vehicle_no": "B2 - Shuttle TBD",
                            "Driver_name": "Jawahar",
                            "seat_count": 47,
                            "sold_out": true,
                            "block_date": false
                        },

                    ]
                },
                {
                    list: [
                        {
                            "pk": 21,
                            "trip_name": "GCorp, Thane to Borivali Stn.",
                            "trip_code": "B3",
                            "trip_type": 1,
                            "trip_time": 2,
                            "pickup_stop": "GCorp, Thane",
                            "drop_stop": "Borivali Stn.",
                            "trip_start_time": "19:00:00",
                            "trip_end_time": "20:00:00",
                            "Vehicle_no": "B3 - Shuttle TBD",
                            "Driver_name": "Jawahar",
                            "seat_count": 47,
                            "sold_out": true,
                            "block_date": false
                        },
                        {
                            "pk": 22,
                            "trip_name": "GCorp, Thane to Borivali Stn.",
                            "trip_code": "B4",
                            "trip_type": 1,
                            "trip_time": 2,
                            "pickup_stop": "GCorp, Thane",
                            "drop_stop": "Borivali Stn.",
                            "trip_start_time": "19:00:00",
                            "trip_end_time": "20:00:00",
                            "Vehicle_no": "B4 - Shuttle TBD",
                            "Driver_name": "Jawahar",
                            "seat_count": 47,
                            "sold_out": false,
                            "block_date": false
                        },
                    ]
                },
                {
                    list: [
                        {
                            "pk": 23,
                            "trip_name": "GCorp, Thane to Borivali Stn.",
                            "trip_code": "B5",
                            "trip_type": 1,
                            "trip_time": 2,
                            "pickup_stop": "GCorp, Thane",
                            "drop_stop": "Borivali Stn.",
                            "trip_start_time": "19:30:00",
                            "trip_end_time": "20:00:00",
                            "Vehicle_no": "B5 - Shuttle TBD",
                            "Driver_name": "Jawahar",
                            "seat_count": 47,
                            "sold_out": false,
                            "block_date": false
                        }
                    ]
                },
            ]
        }
    ]

    return `<div class="BookTicket_BookingPage__iD0EF">
        <div class="BookTicketHeader_BookTicketHeader__Y3Jfo">
            <div class="BookTicketHeader_toast__O0ino toast">Active Rides</div>
            <div class="AppContainer">
                <div class="BookTicketHeader_BookTicketHeaderContent__ppAjX">
                    <div class="BookTicketHeader_TicketIcon__ZaRrJ"><img src="/media/train.svg"
                            alt="Train icon">
                        <p class="offblack f_w_s_b">STATION SHUTTLE <br>SERVICE</p>
                    </div>
                    <div class="BookTicketHeader_BookingFor__Z0enk text-center offblack f_w_s_b">
                        <p style="margin:0">BOOKING <br/> FOR:</p>
                        <p class="BookingDate">${date + "." + month + "." + today.getFullYear()}</p>
                    </div>
                    <div class="BookTicketHeader_logout__KW5dE"><img src="/media/logout.svg">
                    </div>
                </div>
            </div>
        </div>
        <div class="Tickets_Tickets__E18PS">
            <div class="AppContainer">
                <div class="Tickets_TicketsTab__T53O_" style="top: 88px;">
                    ${locations.map((loc) => `<div class="tab-nav ${activeTab === loc ? 'Tickets_active__MOImA' : ''}" data-role="tab" role="tab" data-tab="${loc}">${loc}</div>`).join('')}
                </div>
                <div class="Tickets_Address__wYpcC" style="top: 125.2px;">
                    <div class="Tickets_Pickup__s5ffk">
                        <div>
                            <p>PICKUP</p>
                        </div>
                        <div>
                            <div class="Tickets_Address1__9kW7N">GCorp, Thane</div>
                        </div>
                        <div><img src="/media/green-pin.svg" alt="pin"></div>
                    </div>
                    <div class="Tickets_Drop__S68x3">
                        <div>
                            <p>DROP</p>
                        </div>
                        <div>
                            <div class="Tickets_Address1__9kW7N">Thane E Stn.</div>
                        </div>
                        <div><img src="/media/red-pin.svg" alt="pin"></div>
                    </div>
                </div>
                <div class="buses-container">
                    ${trips.map(trip => `
                        <div data-role="tab-panel" data-tab-panel="${trip.location}" class="tab-panel ${activeTab === trip.location ? 'active' : ''}">
                        ${trip.buses.map(obj => `<div class="Tickets_TicketsList__2eZlO">
                           ${obj.list.map(bus => `<div class="Tickets_Ticket__e3Gzt" data-details='${JSON.stringify(bus)}'>
                                <div class="Tickets_Service__nQBLt ${bus.trip_type === 2 ? 'Tickets_Fast__WCEdU' : ''}">${bus.trip_type === 2 ? 'Fast' : 'Regular'} Service</div>
                                <div class="Tickets_Border__DiBZv">
                                    <div class="Tickets_Time__jmRRJ">${getFormatedTime(bus.trip_start_time)}</div>
                                    <div class="Tickets_Number__TaRsO">${bus.trip_code}</div>
                                </div>
                            </div>`).join("")}
                        </div>`).join("")}
                    </div>
                        `).join("")
        }
                </div>
            </div>
        </div>
        <div class="BookTicketFooter_BookTicketFooter__oOkZ8">
            <div class="AppContainer">
                <div class="BookTicketFooter_BookTicketFooterContent__X6XBM">
                    <div class="BookTicketFooter_TicketIcon__OLV_Z BookTicketFooter_active__lygpZ f_w_m"></div>
                    <div><button class="BookTicketFooter_BookBtn__KOwzd f_w_m"
                            style="pointer-events: none;">BOOK SEAT</button></div>
                </div>
            </div>
        </div>
    </div>`
}

function Ticket() {
    const today = new Date()
    const date = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate()
    const month = today.getMonth() + 1 < 10 ? `0${today.getMonth() + 1}` : today.getMonth() + 1
    const bookedTicketJson = localStorage.getItem('booked-ticket')
    const bookedTicket = JSON.parse(bookedTicketJson)


    return `<div class="BookTicket_BookingPage__iD0EF">
        <div class="BookTicketHeader_BookTicketHeader__Y3Jfo">
            <div class="BookTicketHeader_toast__O0ino toast">Active Rides</div>
            <div class="AppContainer">
                <div class="BookTicketHeader_BookTicketHeaderContent__ppAjX">
                    <div class="BookTicketHeader_TicketIcon__ZaRrJ"><img src="/media/train.svg"
                            alt="Train icon">
                        <p class="offblack f_w_s_b">STATION SHUTTLE <br>SERVICE</p>
                    </div>
                    <div class="BookTicketHeader_BookingFor__Z0enk text-center offblack f_w_s_b">
                        <p style="margin:0">BOOKING <br/> FOR:</p>
                        <p class="BookingDate">${date + "." + month + "." + today.getFullYear()}</p>
                    </div>
                    <div class="BookTicketHeader_logout__KW5dE"><img src="/media/logout.svg">
                    </div>
                </div>
            </div>
        </div>
        <div class="TicketCard_TicketCard__Af0ZR">
             <div class="AppContainer">
                <div>
                    <div class="text-center text_reg f_w_s_b ptb_10">TICKET</div>
                    <div class="TicketCard_Card__vVcLK"
                        style="background-image: url('/media/card.png')">
                        <div class="TicketCard_border__bd1W5"></div>
                        <div class="TicketCard_First__TfgNp TicketCard_viewTicket__yqIqJ flex align-center">
                            <div class="TicketCard_viewText__fJ42Z">
                                <div class="TicketCard_TicketNumber__5kwYy">
                                    <div class="TicketCard_Num__lWVJi">Your ticket has been booked in...</div>
                                </div>
                                <div class="TicketCard_Date__AMhs_ text_xs">To view your ticket, please click on the
                                    <b>VIEW TICKET</b> button below.</div>
                            </div>
                            <div>
                                <div class="TicketCard_Stamp__LrHX4">
                                    <div class="TicketCard_Ticket__qKcmf">
                                        <div class="TicketCard_Border__ofdGQ">
                                            <div class="TicketCard_Time__ppo5w">${getFormatedTime(bookedTicket.trip_start_time)}</div>
                                            <div class="TicketCard_Number__6IBXZ">${bookedTicket.trip_code || ''}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="TicketCard_msgWrap__OeJR3">
                                <p class="TicketCard_msg__zaXME msg text_xs">Note: Your ticket can be viewed for only 3
                                    seconds after button is clicked. VIEW TICKET button to be clicked by Security
                                    personnel only!</p>
                            </div>
                            <div class="TicketCard_viewTicketBtn__NQPOS">VIEW TICKET<p
                                    class="text_xxs">at <b>${getFormatedViewTime(bookedTicket.trip_start_time)}</b></p>
                            </div>
                        </div>
                    </div>
                    <div class="pt_20 mr_24"><button class="TicketCard_CancelBtn__sY6sX">Cancel trip</button></div>
                    <div class="TicketCard_Message__CplVK pt_30 text-center mr_24">
                        <p>Cancellation of tickets is allowed only up to 30 minutes before the start time.</p>
                        <p>Users cannot make a new booking until the existing booking is cancelled.</p>
                        <p>The old booking system will remain live and functional until 01-01-2025.</p>
                        <p>For any issues, please fill out the feedback form available on the homepage.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`
}

function TicketView() {
    const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const today = new Date()
    const date = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate()
    const month = today.getMonth() + 1 < 10 ? `0${today.getMonth() + 1}` : today.getMonth() + 1
    const bookedTicketJson = localStorage.getItem('booked-ticket')
    const bookedTicket = JSON.parse(bookedTicketJson)


    const ticketNumber = `${date + month + today.getFullYear()}/${getDaysNumber()}/${getBookingNumber()}`

    return `<div class="BookTicket_BookingPage__iD0EF">
        <div class="BookTicketHeader_BookTicketHeader__Y3Jfo">
            <div class="BookTicketHeader_toast__O0ino toast">Active Rides</div>
            <div class="AppContainer">
                <div class="BookTicketHeader_BookTicketHeaderContent__ppAjX">
                    <div class="BookTicketHeader_TicketIcon__ZaRrJ"><img src="/media/train.svg"
                            alt="Train icon">
                        <p class="offblack f_w_s_b">STATION SHUTTLE <br>SERVICE</p>
                    </div>
                    <div class="BookTicketHeader_BookingFor__Z0enk text-center offblack f_w_s_b">
                        <p style="margin:0">BOOKING <br/> FOR:</p>
                        <p class="BookingDate">${date + "." + month + "." + today.getFullYear()}</p>
                    </div>
                    <div class="BookTicketHeader_logout__KW5dE"><img src="/media/logout.svg">
                    </div>
                </div>
            </div>
        </div>
        <div class="TicketCard_TicketCard__Af0ZR">
             <div class="AppContainer">
                <div>
                    <div class="text-center text_reg f_w_s_b ptb_10">TICKET</div>
                    <div class="TicketCard_Card__vVcLK"
                        style="background-image: url('/media/card.png')">
                        <div class="TicketCard_border__bd1W5">
                            <!-- expire overlay -->
                         <div class="TicketCard_expired__UwGmK" style="display:none;">
                            <p style="width: 60%;margin: auto;">YOUR TICKET VIEWING HAS EXPIRED</p>
                        </div>
                        </div>
                        
                        <div class="TicketCard_gif__C1zGK">
                            <img src="media/green.gif" />
                        </div>
                        <div class="TicketCard_First__TfgNp TicketCard_viewTicket__yqIqJ flex align-center">

                            <div class="TicketCard_viewText__fJ42Z">
                                <div class="TicketCard_TicketNumber__5kwYy">
                                    <label>Name:</label>
                                    <p class="TicketCard_Num__lWVJi">Ganesh Bingi</p>
                                </div>
                                <div class="TicketCard_TicketNumber__5kwYy">
                                    <label>TICKECT NUMBER:</label>
                                    <p class="TicketCard_Num__lWVJi TicketCard_TicketNum__Vq0tM">${ticketNumber}</p>
                                </div>
                                <div class="TicketCard_TicketNumber__5kwYy">
                                    <label>Trip Details for:</label>
                                    <p class="TicketCard_Date__AMhs_">
                                        ${MONTHS[today.getMonth()]} ${date}, ${today.getFullYear()}
                                    </p>
                                </div>
                                <div class="TicketCard_TicketNumber__5kwYy">
                                    <label>TICKET EXPIRES IN:</label>
                                    <p class="TicketCard_Date__AMhs_ TicketCard_time__rQ30_">
                                        <span>10</span> SECONDS
                                    </p>
                                </div>
                               
                            </div>
                            <div>
                                <div class="TicketCard_Stamp__LrHX4">
                                    <div class="TicketCard_Ticket__qKcmf">
                                        <div class="TicketCard_Border__ofdGQ">
                                            <div class="TicketCard_Time__ppo5w">${getFormatedTime(bookedTicket.trip_start_time)}</div>
                                            <div class="TicketCard_Number__6IBXZ">${bookedTicket.trip_code}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="TicketCard_Last__AhRFE">
                            <div class="TicketCard_Address__9bp_e">
                                <div class="TicketCard_Pickup__njIVq">
                                    <div>
                                        <p>PICKUP</p>
                                    </div>
                                    <div>
                                        <div class="TicketCard_Address1__LgJf_">GCorp, Thane</div>
                                    </div>
                                    <div><img src="/media/green-pin.svg" alt="pin"></div>
                                </div>
                                <div class="TicketCard_Drop__adFXd">
                                    <div>
                                        <p>DROP</p>
                                    </div>
                                    <div>
                                        <div class="TicketCard_Address1__LgJf_">Thane E Stn.</div>
                                    </div>
                                    <div><img src="/media/red-pin.svg" alt="pin"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pt_20 mr_24"><button class="TicketCard_CancelBtn__sY6sX">Cancel trip</button></div>
                    <div class="TicketCard_Message__CplVK pt_30 text-center mr_24">
                        <p>Cancellation of tickets is allowed only up to 30 minutes before the start time.</p>
                        <p>Users cannot make a new booking until the existing booking is cancelled.</p>
                        <p>The old booking system will remain live and functional until 01-01-2025.</p>
                        <p>For any issues, please fill out the feedback form available on the homepage.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`
}


window.onload = function () {
    let root = document.querySelector('#app-root')
    let isUsername = localStorage.getItem('username')
    let isTicket = localStorage.getItem('booked-ticket')
    if (isUsername && !isTicket)
        root.innerHTML = Booking()
    else if (isUsername && isTicket)
        root.innerHTML = Ticket()
    else
        root.innerHTML = Login()
    addListeners()
}

function addListeners() {
    removeListeners()
    let form = document.querySelector('#main-form')
    if (form)
        form.addEventListener('submit', loginUser)

    let tabs = document.querySelector('.Tickets_TicketsTab__T53O_')
    if (tabs)
        tabs.addEventListener('click', selectLocation)

    let busesContainer = document.querySelector('.buses-container')
    if (busesContainer)
        busesContainer.addEventListener('click', selectBus)

    let bookBtn = document.querySelector('.BookTicketFooter_BookBtn__KOwzd')
    if (bookBtn)
        bookBtn.addEventListener('click', bookTicket)

    let viewBtn = document.querySelector('.TicketCard_viewTicketBtn__NQPOS')
    if (viewBtn)
        viewBtn.addEventListener('click', viewTicket)

    let cancelBtn = document.querySelector('.TicketCard_CancelBtn__sY6sX')
    if (cancelBtn)
        cancelBtn.addEventListener('click', cancelTicket)

    let logoutBtn = document.querySelector('.BookTicketHeader_logout__KW5dE')
    if (logoutBtn)
        logoutBtn.addEventListener('click', logoutUser)
}

function removeListeners() {
    let form = document.querySelector('#main-form')
    if (form)
        form.removeEventListener('submit', loginUser)

    let tabs = document.querySelector('.Tickets_TicketsTab__T53O_')
    if (tabs)
        tabs.removeEventListener('click', selectLocation)

    let busesContainer = document.querySelector('.buses-container')
    if (busesContainer)
        busesContainer.removeEventListener('click', selectBus)

    let bookBtn = document.querySelector('.BookTicketFooter_BookBtn__KOwzd')
    if (bookBtn)
        bookBtn.removeEventListener('click', bookTicket)

    let viewBtn = document.querySelector('.TicketCard_viewTicketBtn__NQPOS')
    if (viewBtn)
        viewBtn.removeEventListener('click', viewTicket)

    let cancelBtn = document.querySelector('.TicketCard_CancelBtn__sY6sX')
    if (cancelBtn)
        cancelBtn.removeEventListener('click', cancelTicket)

    let logoutBtn = document.querySelector('.BookTicketHeader_logout__KW5dE')
    if (logoutBtn)
        logoutBtn.removeEventListener('click', logoutUser)
}


function selectLocation(event) {
    let target = event.target
    if (target.classList.contains('tab-nav')) {
        let previous = document.querySelector('.tab-nav.Tickets_active__MOImA')
        let previousBus = document.querySelector('.Tickets_Ticket__e3Gzt.Tickets_active__MOImA')
        let previousPanel = document.querySelector('.tab-panel.active')
        let tab = target.dataset['tab']
        let tabPanel = document.querySelector(`[data-tab-panel=${tab}]`)
        let bookBtn = document.querySelector('.BookTicketFooter_BookBtn__KOwzd')
        if (previousBus)
            previousBus.classList.remove('Tickets_active__MOImA')
        previous.classList.remove('Tickets_active__MOImA')
        previousPanel.classList.remove('active')
        target.classList.add('Tickets_active__MOImA')
        tabPanel.classList.add('active')
        bookBtn.classList.remove('BookTicketFooter_active__lygpZ')
        bookBtn.style.pointerEvents = "none"
        localStorage.removeItem('booked-ticket')
    }
}

function selectBus(event) {
    let target = event.target
    if (target.classList.contains('Tickets_Ticket__e3Gzt')) {
        let previous = document.querySelector('.Tickets_Ticket__e3Gzt.Tickets_active__MOImA')
        let bookBtn = document.querySelector('.BookTicketFooter_BookBtn__KOwzd')
        if (previous)
            previous.classList.remove('Tickets_active__MOImA')
        target.classList.add('Tickets_active__MOImA')
        bookBtn.classList.add('BookTicketFooter_active__lygpZ')
        bookBtn.style.pointerEvents = "all"
        localStorage.setItem('booked-ticket', target.dataset['details'])
    }
}

function bookTicket() {
    let root = document.querySelector('#app-root')
    root.innerHTML = Ticket()
    addListeners()
}

function viewTicket() {
    let root = document.querySelector('#app-root')
    root.innerHTML = TicketView()
    addListeners()
    startViewTimer()
}

function cancelTicket() {
    let root = document.querySelector('#app-root')
    localStorage.removeItem('booked-ticket')
    // show booking screen
    root.innerHTML = Booking()
    addListeners()
}

function loginUser(e) {
    e.preventDefault();
    const formData = new FormData(e.target)
    let root = document.querySelector('#app-root')
    localStorage.setItem('username', formData.get('username'))
    // show booking screen
    root.innerHTML = Booking()
    addListeners()
}

function logoutUser() {
    let root = document.querySelector('#app-root')
    localStorage.removeItem('booked-ticket')
    localStorage.removeItem('username')
    // show booking screen
    root.innerHTML = Login()
    addListeners()
}

function startViewTimer() {
    let count = 10;
    const span = document.querySelector('.TicketCard_time__rQ30_ span')
    const expireOverlay = document.querySelector('.TicketCard_expired__UwGmK')
    const cancelBtn = document.querySelector('.TicketCard_CancelBtn__sY6sX')
    const intervalTimerId = setInterval(startTimer, 1000)

    function startTimer() {
        if (count === 0) {
            clearInterval(intervalTimerId)
            expireOverlay.style.display = 'grid'
            cancelBtn.remove()
        } else {
            count -= 1
            span.innerText = '0' + count
        }
    }
}


function getDaysNumber() {
    const currentDate = new Date()
    const initialDate = new Date(currentDate.getFullYear(), 0, 1)
    const oneDay = 1000 * 60 * 60 * 24

    return Math.ceil((currentDate.getTime() - initialDate.getTime()) / oneDay)
}

function getBookingNumber() {
    return `${parseInt(Math.random() * 9)}${parseInt(Math.random() * 9)}${parseInt(Math.random() * 9)}`
}

function getFormatedTime(timeStamp) {

    const time = timeStamp.split(':').map(t => parseInt(t))

    return `${time[0] > 12 ? time[0] - 12 < 10 ? `0${time[0] - 12}` : time[0] : time[0]}:${time[1] < 10 ? '0' + time[1] : time[1]} PM`
}

function getFormatedViewTime(timeStamp) {

    const time = timeStamp.split(':').map(t => parseInt(t))

    return `${time[0] > 12 ? time[0] - 12 < 10 ? `0${time[1] > 0 ? time[0] - 12 : time[0] - 12 - 1}` : time[0] : time[0]}:${time[1] > 0 ? time[1] - 10 : time[1] + 50} PM`
}