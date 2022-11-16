import { Request, Response } from "express";
import { Order } from "../../models/Order";

export async function changeOrderStatus(req: Request, res: Response) {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    if (!["WAITING", "IN_PRODUCTION", "DONE"].includes(status)) {
      // validar se o status é igual a alguns dos 3 valores permitidos de Status da Model
      return res.status(400).json({
        error: "status should be one of these: WAITING, IN_PRODUCTION, DONE.",
      });
    }

    await Order.findByIdAndUpdate(orderId, { status }); // atualiza o status com o status do req.body

    res.sendStatus(204);
  } catch {
    res.sendStatus(500);
  }
}
