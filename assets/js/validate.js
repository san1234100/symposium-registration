import JustValidate from "just-validate";
const formEl = document.querySelector("form");

const justValidate = new JustValidate(formEl);

justValidate
  .addField(
    "#firstname",
    [
      {
        rule: "required",
      },
      {
        rule: "minLength",
        value: 3,
      },
      {
        rule: "maxLength",
        value: 15,
      },
    ],
    {
      errorLabelCssClass: ["form-error"],
    }
  )
  .addField(
    "#lastname",
    [
      {
        rule: "required",
      },
      {
        rule: "minLength",
        value: 1,
      },
      {
        rule: "maxLength",
        value: 2,
      },
    ],
    {
      errorLabelCssClass: ["form-error"],
    }
  )
  .addField(
    "#collegename",
    [
      {
        rule: "required",
      },
      {
        rule: "minLength",
        value: 10,
      },
      {
        rule: "maxLength",
        value: 30,
      },
    ],
    {
      errorLabelCssClass: ["form-error"],
    }
  )
  .addField(
    "#email",
    [
      {
        rule: "required",
      },
      {
        rule: "email",
      },
    ],
    {
      errorLabelCssClass: ["form-error"],
    }
  )
  .addField(
    "#phNumber",
    [
      {
        rule: "required",
      },
      {
        rule: "number",
      },
      {
        rule: "minLength",
        value: 10,
      },
      {
        rule: "maxLength",
        value: 10,
      },
    ],
    {
        errorLabelCssClass: ["form-error"],
    }
  );
