import React, { PropsWithChildren, useActionState } from 'react';
import Button from '../Button/Button';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  initialState?: unknown;
  handleFormAction: (
    state: unknown,
    payload: FormData
  ) => Promise<{
    success: boolean;
    errors?: Record<string, string[]>;
  }>;
  submitLabel?: string;
  submittingLabel?: string;
  hideButton?: boolean;
}

const Form = ({
  children,
  initialState = {},
  submitLabel = 'Submit',
  hideButton = false,
  handleFormAction,
  ...rest
}: PropsWithChildren<FormProps>) => {
  const [state, formAction, isPending] = useActionState(
    handleFormAction,
    initialState
  );

  console.log('Form state:', state);

  return (
    <form action={formAction} {...rest}>
      {children}
      {!hideButton && (
        <Button
          aria-label={submitLabel}
          disabled={isPending}
          loading={isPending}
          title={submitLabel}
          titleCase="uppercase"
          type="submit"
        />
      )}
    </form>
  );
};

export default Form;
