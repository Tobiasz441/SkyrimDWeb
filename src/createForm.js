const fields = ["username","photo","location","birthday","description","gender","password"]
const fieldTypes = ["text", "file", "text", "date", "text", "text", "password"]

function getForm() {
  let form = "";
  for (const fieldsKey in fields) {
    form += "<label for=\"${fieldsKey}\">${fieldsKey}</label>"
  }
  return form;
}
