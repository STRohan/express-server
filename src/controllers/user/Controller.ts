import { successHandler } from './../../libs/routes/successHandler';
class UserController {
  public auth(req, res) {
    const { name, email, role } = req.body;
    res.status(200).send(successHandler('success', { name, email, role }, 200));
  }
}
export default new UserController();
