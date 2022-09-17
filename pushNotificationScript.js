const btn1 = document.querySelector("button");
var now = Date.now();
btn1.addEventListener("click", () => {
  Notification.requestPermission().then((perm) => {
    if (perm === "granted") {
      const notify = new Notification("Template", {
        body: `A new Policy added at ${now}`,
        data: { PolicyNo: "0111022020-0", Primium: 500 },
        icon: "space-back.png",
        
      });
    }
  });
});
