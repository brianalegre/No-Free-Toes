import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { gql } from '@apollo/client';
import Alert from "../../Alert";
import Loading from "../../Loading";
import Successful from "../../Successful";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [photo, setPhoto] = useState("");
    const [location, setLocation] = useState("");
    const [services, setServices] = useState("");
};

