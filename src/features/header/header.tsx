
import Tab from '@mui/material/Tab';
import {Tabs} from "@mui/material";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();


    const [path, setPath] = useState<string>();

    const handleChange = (_: React.SyntheticEvent, newPath: string) => {
        setPath(newPath);
        navigate(newPath);
    }

    return (
        <Tabs
            value={path || false}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
        >
            <Tab label="Login-Redux" value="/login-redux" />
            <Tab label="Login-Formik" value="/login-formik" />
            <Tab label="Get-Activity-Saga" value="/get-activity-saga" />
            <Tab label="Login-Mst" value="/login-mst" />
        </Tabs>
    );
}

export default Header;