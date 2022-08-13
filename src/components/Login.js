import { Alert } from "bootstrap"
import { useState } from "react"
import { Button, CardBody, Form, FormGroup, Input, Label } from "reactstrap"
import { APISNG, postFormDataAsJson } from "../utils"

export function Login(props) {
  const [inputs, setInputs] = useState({})

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setInputs((values) => ({ ...values, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    alert("logged inputs to console")
    console.log(JSON.stringify(inputs, null, 4))

    // const formData = new FormData()
    // console.log(inputs)
    /* for (const [k, v] of inputs) {
      console.log(">>", k, v)
    } */
    const endpoint = ""
    Object.keys(inputs).forEach((prop) => console.log(prop))
    const responseData = await postFormDataAsJson({ endpoint, inputs })
    console.log({ responseData })
  }

  return (
    <CardBody>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" id="email" name="email" onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
          />
        </FormGroup>
      </Form>
      <Button>Submit</Button>
    </CardBody>
  )
}

export function LoginSuccess(props) {
  return (
    <CardBody>
      <Alert>
        <h4 className="alert-heading">Well done!</h4>
        <p>Aww yeah, you successfully logged in.</p>
        <hr />
        <p className="mb-0">You'll be redirected to your dashboard shortly</p>
      </Alert>
    </CardBody>
  )
}
