// Import Images
import avatar1 from "../../assets/images/Company/skylens.png";
import avatar2 from "../../assets/images/Company/kingsky.png";
import avatar3 from "../../assets/images/Company/Dynamic aviation.png";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";
import avatar6 from "../../assets/images/users/avatar-6.jpg";
import avatar7 from "../../assets/images/users/avatar-7.jpg";
import avatar8 from "../../assets/images/users/avatar-8.jpg";

const crmWidgets = [
    {
        id: 1,
        label: "Airplane",
        badge: "ri-arrow-up-circle-line text-success",
        icon: "bx bxs-plane",
        counter: "4",
        decimals: 0,
        suffix: "",
        prefix: ""
    },
    {
        id: 2,
        label: "Pilot",
        badge: "ri-arrow-up-circle-line text-success",
        icon: "bx bx-user",
        counter: "57",
        decimals: 0,
        suffix: "",
        prefix: ""
    },
    {
        id: 3,
        label: "Owner",
        badge: "ri-arrow-down-circle-line text-danger",
        icon: "bx bxs-user-check",
        counter: "3",
        decimals: 0,
        suffix: "",
        prefix: ""
    },
    {
        id: 4,
        label: "Report",
        badge: "ri-arrow-up-circle-line text-success",
        icon: "bx bxs-report",
        counter: "20",
        decimals: 0,
        suffix: "",
        prefix: ""
    },
    // {
    //     id: 5,
    //     label: "Annual Deals",
    //     badge: "ri-arrow-down-circle-line text-danger",
    //     icon: "ri-service-line",
    //     counter: "2659",
    //     decimals: 0,
    //     separator: ",",
    //     suffix: "",
    //     prefix: ""
    // },
];

const dealsStatus = [
    {
        id: 1,
        name: "Skylens",
        airplain: "1",
        pilot:"7",
        img: avatar1,
        // representativeName: "Donald Risher",
        // badgeClass: "3",
        // status: "Deal Won",
        // statusValue: "14",
        // Owner : "Skylens",
        // subscription : ""
    },
    {
        id: 2,
        name: "Kingsky",
        airplain: "2",
        pilot:"20",
        img: avatar2,
        // representativeName: "Sofia Cunha",
        // badgeClass: "1",
        // status: "Intro Call",
        // statusValue: "3",
        // Owner : "Kingsky",
        // subscription : ""
    },
    {
        id: 3,
        name: "Dynamic aviation",
        airplain: "2",
        pilot:"20",
        img: avatar3,
        // representativeName: "Luis Rocha",
        // badgeClass: "12",
        // status: "Stuck",
        // statusValue: "20",
        // Owner : "Dynamic aviation ",
        // subscription : ""
    },
    // {
    //     id: 4,
    //     name: "BE9L",
    //     mark: "TS#&JS",
    //     img: avatar3,
    //     representativeName: "Vitoria Rodrigues",
    //     badgeClass: "15",
    //     status: "Deal Won",
    //     statusValue: "5",
    //     Owner : "Dynamic aviation ",
    //     subscription : ""
    // },
    // {
    //     id: 5,
    //     name: "Apple Inc.",
    //     date: "Sep 30, 2021",
    //     img: avatar6,
    //     representativeName: "Vitoria Rodrigues",
    //     badgeClass: "info",
    //     status: "New Lead",
    //     statusValue: "$78.9K",
    //     Owner : "Dynamic"
    // },
    // {
    //     id: 6,
    //     name: "Apple Inc.",
    //     date: "Sep 30, 2021",
    //     img: avatar6,
    //     representativeName: "Vitoria Rodrigues",
    //     badgeClass: "info",
    //     status: "New Lead",
    //     statusValue: "$78.9K",
    //     Owner : "Dynamic"
    // },
];

const tasks = [
    {
        id: 1,
        forId: "task_one",
        text: "Review and make sure nothing slips through cracks",
        date: "15 Sep, 2021",
    },
    {
        id: 2,
        forId: "task_two",
        text: "Send meeting invites for sales upcampaign",
        date: "20 Sep, 2021",
    },
    {
        id: 3,
        forId: "task_three",
        text: "Weekly closed sales won checking with sales team",
        date: "24 Sep, 2021",
    },
    {
        id: 4,
        forId: "task_four",
        text: "Add notes that can be viewed from the individual view",
        date: "27 Sep, 2021",
    },
    {
        id: 5,
        forId: "task_five",
        text: "Move stuff to another page",
        date: "27 Sep, 2021",
    },
    {
        id: 6,
        forId: "task_six",
        text: "Styling wireframe design and documentation for velzon admin",
        date: "27 Sep, 2021",
    },
];

const activities = [
    {
        id: 1,
        date: "25",
        weekDay: "Tue",
        time: "12:00am - 03:30pm",
        caption: "Meeting for campaign with sales team",
        subItem: [
            { id: 1, img: avatar6 },
            // { id: 2, img: avatar2 },
            // { id: 3, img: avatar3 }
        ],
        imgNumber: "5",
        bgcolor: "bg-info"
    },
    // {
    //     id:1,
    //     avatar:avatar1,
    //     username: "Skylens",
    //     aircarftamount: "1",
    //     Pilot: "7"
    // },
    {
        id: 2,
        date: "20",
        weekDay: "Wed",
        time: "02:00pm - 03:45pm",
        caption: "Adding a new event with attachments",
        subItem: [
            // { id: 1, img: avatar4 },
            // { id: 2, img: avatar5 },
            // { id: 3, img: avatar6 },
            { id: 4, img: avatar7 }],
        imgNumber: "3",
        bgcolor: "bg-success"
    },
    {
        id: 3,
        date: "17",
        weekDay: "Wed",
        time: "04:30pm - 07:15pm",
        caption: "Create new project Bundling Product",
        subItem: [
            { id: 1, img: avatar8 },
            // { id: 2, img: avatar1 },
            // { id: 3, img: avatar2 }
        ],
        imgNumber: "4",
        bgcolor: "bg-primary"
    },
    {
        id: 4,
        date: "12",
        weekDay: "Tue",
        time: "10:30am - 01:15pm",
        caption: "Weekly closed sales won checking with sales team",
        subItem: [
            // { id: 1, img: avatar1 },
            { id: 2, img: avatar5 },
            // { id: 3, img: avatar2 }
        ],
        imgNumber: "9",
        bgcolor: "bg-warning"
    },
];

const closingDeals = [
    {
        id: 1,
        dealName: "Wayne Jhon",
        img: avatar1,
        salesRep: "Skylens",
        amount: "1",
        closeDate: "Yes",
    },
    {
        id: 2,
        dealName: "Tom Jerry",
        img: avatar2,
        salesRep: "	Dynamic Aviation",
        amount: "2",
        closeDate: "Yes",
    },
    {
        id: 3,
        dealName: "Oscar Boues",
        img: avatar7,
        salesRep: "KingsSky",
        amount: "1",
        closeDate: "No",
    },
    // {
    //     id: 4,
    //     dealName: "Raitech Soft",
    //     img: avatar4,
    //     salesRep: "Julia William",
    //     amount: "89.5",
    //     closeDate: "20 Sep 2021",
    // },
    // {
    //     id: 5,
    //     dealName: "Absternet LLC",
    //     img: avatar4,
    //     salesRep: "Vitoria Rodrigues",
    //     amount: "89.5",
    //     closeDate: "20 Sep 2021",
    // },
];

export { crmWidgets, dealsStatus, tasks, activities , closingDeals};