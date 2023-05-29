import nextConnect from "next-connect";

const currentHandler = nextConnect({
  onNoMatch: (req, res) => res.status(404).json({ message: "not found" }),
})
  .get((req, res) => res.status(200).json({ message: "GET!" }))
  .post((req, res) => res.status(200).json({ message: "POST!" }))
  .put((req, res) => res.status(200).json({ message: "PUT!" }))
  .patch((req, res) => res.status(200).json({ message: "PATCH!" }))
  .delete((req, res) => res.status(200).json({ message: "DELETE!" }));

function previousHandler(req, res) {
  const { method } = req;
  if (method === "GET") {
    res.status(200).json({ message: "GET!" });
  }
  if (method === "POST") {
    res.status(200).json({ message: "POST!" });
  }
  if (method === "PUT") {
    res.status(200).json({ message: "PUT!" });
  }
  if (method === "PATCH") {
    res.status(200).json({ message: "PATCH!" });
  }
  if (method === "DELETE") {
    res.status(200).json({ message: "DELETE!" });
  }

  res.status(404).json({ message: "not found" });
}

export default currentHandler;
