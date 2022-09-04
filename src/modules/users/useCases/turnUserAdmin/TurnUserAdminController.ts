import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    try {
      const user = this.turnUserAdminUseCase.execute({
        user_id: String(user_id),
      });

      return response.status(200).send(user);
    } catch (e) {
      return response.status(404).send({ error: "mensagem do erro" });
    }
  }
}

export { TurnUserAdminController };
