import type { SerializedError } from '@reduxjs/toolkit';
import type { FetchBaseQueryErrorCustom } from '../../../types/api';

export const isFetchError = (
  result?:
    | { data: any }
    | { error: FetchBaseQueryErrorCustom | SerializedError },
): result is { error: FetchBaseQueryErrorCustom } => {
  if (!result) {
    return false;
  }
  if ('error' in result) {
    const authError = result.error;
    if ('data' in authError) {
      return true;
    }
  }
  return false;
};
