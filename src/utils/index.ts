import { CreateStyled } from '@emotion/styled';

export * from './unit-conversion';

export const transientOptions: Parameters<CreateStyled>[1] = {
  shouldForwardProp: (propName: string) => !propName.startsWith('$'),
};

export default transientOptions;
