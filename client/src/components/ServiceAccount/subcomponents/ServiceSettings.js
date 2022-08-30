import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_SERVICETYPES } from "../../../utils/queries";

export default function ServiceSettings() {
    const { loggedInUserId } = useParams();
    
    const [serviceTypes, setServiceTypes] = useState([]);
    
    const { loading, error, data } = useQuery(
        QUERY_SERVICETYPES,
        {
            variables: { serviceUserId: loggedInUserId },
            fetchPolicy: "no-cache",
        }
    )

    useEffect(() => {
        if (data) {
            setServiceTypes(data.serviceTypes)
        }
    })
    // console.log(data)
    
    return (
        <section className="mt-5 md:ml-5 md:mt-0">
            <h1 className="py-2 text-xl">
                Services
            </h1>
        </section>
    )
} 