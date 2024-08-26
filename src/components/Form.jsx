import {TextInput,Textarea,Button,Stack} from "@mantine/core"
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Form(){
    const formRef = useRef();
    const [loading, setLoading]=useState(false)
    const sendEmail = (e) => {
      e.preventDefault();
        setLoading(true)
      emailjs
        .sendForm('service_48rhy85', 'template_3fo85kh', formRef.current, {
          publicKey: 'Yt1e5pjNLVd6KVQ69',
        })
        .then(
          () => {
            alert('message received,we will respond soon!');
          },
          (error) => {
            alert("sorry,message not sent,refresh and try again!");
          },
        ).finally(()=>{
            setLoading(false)
            formRef.current?.reset()
        })
    };
    return(
        <form ref={formRef} onSubmit={sendEmail}>
            <Stack gap={10}>
            <h2>Request for service</h2>
            <TextInput name={"name"} placeholder="Your name" />
            <TextInput name={"email"} placeholder="Your email" />
            <TextInput name={"phone"} placeholder="phone number" />
            <Textarea name="message" placeholder="describe service"/>
            <Button disabled={loading} loading={loading} type="submit"> send message</Button>
            </Stack>
        </form>
    )
}