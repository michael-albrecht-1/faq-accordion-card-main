const list = [
  [
    "How many team members can I invite ?",
    "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
  ],
  [
    "What is the maximum file upload size ?",
    "No more than 2GB. All files in your account must fit your allotted storage space."
  ],
  [
    "How do I reset my password ?",
    "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."
  ],
  [
    "Can I cancel my subscription ?",
    "Yes! Send us a message and we’ll process your request no questions asked."
  ],
  [
    "Do you provide additional support ?",
    "Chat and email support is available 24/7. Phone lines are open during normal business hours."
  ]
];

const iconArrowArrow = document.createElement("img");
iconArrowArrow.src = "./images/icon-arrow-down.svg";
// iconArrowArrow.onclick = showAnswer();

const root = document.getElementById("root");

const div1 = document.createElement("div");
div1.innerHTML = list[0][0];

div1.appendChild(iconArrowArrow);

const div1Response = document.createElement("div");
div1Response.innerHTML = list[0][1];
div1Response.style.display = "none";

div1.appendChild(div1Response);

root.appendChild(div1);

function showAnswer() {
  if (div1Response) {
    div1Response.style.display === "none"
      ? (div1Response.style.display = "block")
      : (div1Response.style.display = "none");
  }
}
