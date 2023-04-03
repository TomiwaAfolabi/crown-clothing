export type ActionwithPayload<T, P> = {
  type: T;
  payload: P;
};

export type Action<T> = {
  type: T;
};
export function CreateAction<T extends string, P>(
  type: T,
  payload: P
): ActionwithPayload<T, P>;
export function CreateAction<T extends string, P>(
  type: T,
  payload: void
): Action<T>;

export function CreateAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}
