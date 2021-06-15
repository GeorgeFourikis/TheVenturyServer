function emailHandler(data) {
  const parseData = JSON.parse(data);
  const emails = parseData.data.emails;
  const joke = parseData.data.joke;
  console.log("==========================");
  console.log("==========================");
  console.log("The Following emails are the ones the joke will be sent.");
  emails.forEach((email) => {
    console.log(email);
  });
  console.log("==========================");
  console.log("The joke is the following.");
  console.log(joke);
  console.log("==========================");
  console.log("==========================");
}

module.exports = { emailHandler };
