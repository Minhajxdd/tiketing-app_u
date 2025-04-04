import axios from "axios";
import { useState } from "react";
import { UserRequestType } from "../types/use-request.types";

export default ({ url, method, body }: UserRequestType) => {
  const [errors, setErrors] = useState<any>(null);

  const doRequest = async () => {
    try {
      setErrors(null);
      const respose = await axios[method](url, body);
      return respose.data;
    } catch (err: any) {
      setErrors(
        <div className="alert alert-danger">
          <h4>Oops...</h4>
          <ul className="my-0">
            {err.response.data.errors.map((err: any) => (
              <li key={err.message}>{err.message}</li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return { doRequest, errors };
};
