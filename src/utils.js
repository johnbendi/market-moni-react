export async function postFormDataAsJson({ endpoint, formData }) {
  const plainFormData = Object.fromEntries(formData.entries())
  const formDataJsonString = JSON.stringify(plainFormData)

  const apiKey = "e76eab907b16b1abb091559851cb5f82"

  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ClientID: apiKey,
    },
    body: formDataJsonString,
  }

  const response = await fetch(endpoint, fetchOptions)

  if (!response.ok) {
    const errorMessage = await response.text()
    throw new Error(errorMessage)
  }

  return response.json()
}
