import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Navdata = () => {
    const history = useHistory();
    //state data
    const [isDashboard, setIsDashboard] = useState(false);
    const [isApps, setIsApps] = useState(false);

    // Apps
    const [isEcommerce, setIsEcommerce] = useState(false);
    const [isProjects, setIsProjects] = useState(false);
    const [isInvoices, setIsInvoices] = useState(false);

    const [iscurrentState, setIscurrentState] = useState('Dashboard');

    function updateIconSidebar(e) {
        if (e && e.target && e.target.getAttribute("subitems")) {
            const ul = document.getElementById("two-column-menu");
            const iconItems = ul.querySelectorAll(".nav-icon.active");
            let activeIconItems = [...iconItems];
            activeIconItems.forEach((item) => {
                item.classList.remove("active");
                var id = item.getAttribute("subitems");
                if (document.getElementById(id))
                    document.getElementById(id).classList.remove("show");
            });
        }
    }

    useEffect(() => {
        document.body.classList.remove('twocolumn-panel');
        if (iscurrentState !== 'Dashboard') {
            setIsDashboard(false);
        }
        if (iscurrentState !== 'Apps') {
            setIsApps(false);
        }
    }, [
        history,
        iscurrentState,
        isDashboard,
        isApps,
    ]);

    const menuItems = [
        {
            label: "Menu",
            isHeader: true,
        },
        {
            id: "dashboard",
            label: "OverView",
            icon: "ri-dashboard-2-line",
            link: "/#",
            stateVariables: isDashboard,
            click: function (e) {
                e.preventDefault();
                setIsDashboard(!isDashboard);
                setIscurrentState('Dashboard');
                updateIconSidebar(e);
            },
            subItems: [
                {
                    id: "analytics",
                    label: "Save Data",
                    link: "/dashboard-admin",
                    parentId: "dashboard",
                },
                {
                    id: "crm",
                    label: "Invoice State",
                    link: "/apps-invoice-states",
                    parentId: "dashboard",
                },
                {
                    id: "ecommerce",
                    label: "Setting",
                    link: "/apps-ecommerce-user-list",
                    parentId: "dashboard",
                },
                {
                    id: "ecommerce",
                    label: "Unpaid Subscription",
                    link: "/apps-ecommerce-user-list",
                    parentId: "dashboard",
                },
                {
                    id: "ecommerce",
                    label: "User List",
                    link: "/apps-ecommerce-user-list",
                    parentId: "dashboard",
                },

            ],
        },
        // {
        //     id: "apps",
        //     label: "Dashboard",
        //     icon: "ri-apps-2-line",
        //     link: "/dashboard-admin",
        //     click: function (e) {
        //         e.preventDefault();
        //         setIsApps(!isApps);
        //         setIscurrentState('Apps');
        //         updateIconSidebar(e);
        //     },
        //     stateVariables: isApps,
        //     subItems: [
        //         {
        //             id: "invoices",
        //             label: "Administrator",
        //             link: "/dashboard-admin",
        //             isChildItem: true,
        //             click: function (e) {
        //                 e.preventDefault();
        //                 setIsInvoices(!isInvoices);
        //             },
        //             parentId: "apps",
        //             stateVariables: isInvoices,
        //             childItems: [
        //                 { id: 1, label: "Owner Profile", link: "/apps-aircraft-register" },
        //                 { id: 2, label: "List of Users", link: "/apps-ecommerce-user-list" },
        //                 { id: 3, label: "Report Management", link: "/apps-report-management" },

        //             ]
        //         },
        //         {
        //             id: "appsecommerce",
        //             label: "Pilot",
        //             link: "/#",
        //             isChildItem: true,
        //             click: function (e) {
        //                 e.preventDefault();
        //                 setIsEcommerce(!isEcommerce);
        //             },
        //             parentId: "apps",
        //             stateVariables: isEcommerce,
        //             childItems: [
        //                 { id: 1, label: "List of Airplane", link: "/apps-airplane-list", parentId: "apps" },
        //                 { id: 2, label: "Profile", link: "/pages-profile", parentId: "apps" },
        //                 { id: 8, label: "Create Report", link: "/apps-create-report", parentId: "apps" },
        //             ]
        //         },
        //         {
        //             id: "appsprojects",
        //             label: "Owner",
        //             link: "/#",
        //             isChildItem: true,
        //             click: function (e) {
        //                 e.preventDefault();
        //                 setIsProjects(!isProjects);
        //             },
        //             parentId: "apps",
        //             stateVariables: isProjects,
        //             childItems: [
        //                 { id: 1, label: "Pilot List", link: "/apps-pilot-list", parentId: "apps", },
        //                 { id: 2, label: "Owner profile", link: "/apps-aircraft-register", parentId: "apps", },
        //                 { id: 3, label: "Report Management", link: "/apps-report-management", parentId: "apps", },
        //             ]
        //         },
        //     ],
        // },
    ];


    
        return <React.Fragment>{menuItems}</React.Fragment>;
 
        
   
};
export default Navdata;