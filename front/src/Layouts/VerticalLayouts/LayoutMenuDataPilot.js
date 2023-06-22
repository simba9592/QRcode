import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const NavdataPilot = () => {
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
            label: "Dashboards-Self",
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
                    label: "Admin dashboard",
                    link: "/dashboard-admin",
                    parentId: "dashboard",
                },
                {
                    id: "crm",
                    label: "Owner dashboard",
                    link: "/dashboard-owner",
                    parentId: "dashboard",
                },
                {
                    id: "ecommerce",
                    label: "Pilot dashboard",
                    link: "/dashboard-pilot",
                    parentId: "dashboard",
                },
            ],
        },
     
    ];

    const menuItemspilot = [{
        label: "Menu",
        isHeader: true,
    },
    {
        id: "dashboard",
        label: "Dashboards-Pilot",
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
                id: "ecommerce",
                label: "Pilot dashboard",
                link: "/dashboard-pilot",
                parentId: "dashboard",
            },
        ],
    },
    ]

//     const { user, error } = useSelector(state => ({
//         user: state.login.user,
//         error: state.login.error,
//     }));
    
//    console.log(user, "user");
        return <React.Fragment>{menuItemspilot}</React.Fragment>;
 
        
   
};
export default NavdataPilot;