import { useState } from "react"
import {
  Button,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap"
import { postFormDataAsJson } from "../utils"

function Register(props) {
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
    Object.keys(inputs).forEach((prop) => console.log(prop))

    const endpoint = "/enaira-user/CreateConsumerV2"
    const responseData = await postFormDataAsJson({ endpoint, inputs })
    console.log({ responseData })
  }

  return (
    <CardBody>
      <CardTitle tag="h5" className="mb-4">
        Register
      </CardTitle>

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="channelCode">ChannelCode</Label>
          <Input
            type="text"
            id="channelCode"
            name="channelCode"
            value="APISNG"
            readOnly
          />
        </FormGroup>
        <FormGroup>
          <Label for="uid">ID Number</Label>
          <Input type="text" id="uid" name="uid" onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="uidType">ID Type</Label>
          <Input type="text" id="uidType" value="NIN" name="uidType" readOnly />
        </FormGroup>
        <FormGroup>
          <Label for="reference">Reference</Label>
          <Input
            type="text"
            id="reference"
            name="reference"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input type="text" id="title" name="title" onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input
            type="text"
            id="firstName"
            name="firstName"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input
            type="text"
            id="lastName"
            name="lastName"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="userName">User Name</Label>
          <Input
            type="text"
            id="userName"
            name="userName"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="with a placeholder"
            type="email"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Phone Number</Label>
          <Input type="text" id="phone" name="phone" onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="Choose a passowrd"
            type="password"
          />
        </FormGroup>
        <FormGroup>
          <Label for="postalCode">Postal Code</Label>
          <Input
            type="text"
            id="postalCode"
            name="postalCode"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="city">City</Label>
          <Input type="text" id="city" name="city" onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="address">Address</Label>
          <Input
            type="text"
            id="address"
            name="address"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="countryOfResidence">Country of Residence</Label>
          <Input
            type="text"
            id="countryOfResidence"
            name="countryOfResidence"
            value="NG"
            readOnly
          />
        </FormGroup>
        <FormGroup>
          <Label for="tier">Tier</Label>
          <Input type="text" id="tier" name="tier" value="1" readOnly />
        </FormGroup>
        <FormGroup>
          <Label for="accountNumber">Account Number</Label>
          <Input
            type="text"
            id="accountNumber"
            name="accountNumber"
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="dateOfBirth">Date of Birth</Label>
          <Input
            type="text"
            id="dateOfBirth"
            name="dateOfBirth"
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="countryOfBirth">Country of Birth</Label>
          <Input
            type="text"
            id="countryOfBirth"
            name="countryOfBirth"
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="remarks">Remarks</Label>
          <Input
            type="text"
            id="remarks"
            name="remarks"
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="referralCode">Referral Code</Label>
          <Input
            type="text"
            id="referralCode"
            name="referralCode"
            onChange={handleChange}
          />
        </FormGroup>

        <Button>Submit</Button>
      </Form>
    </CardBody>
  )
}

export default Register
