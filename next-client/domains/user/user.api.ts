import { UserRequestPayload } from "./user.type";

export async function CreateUser(payload: UserRequestPayload) {
      const res = await fetch('/api/admin/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
      });

      if (!res.ok) {
            const err = await res.json();
            throw new Error(err.message || 'Create user failed');
      }

      return res.json();
}