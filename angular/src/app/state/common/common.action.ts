import {createAction, props} from '@ngrx/store';
import {SnackBarType} from '../../services/toast.service';

export const showToast = createAction('Show toast', props<{ message: string, snackBarType: SnackBarType }>());
export const goRoute = createAction('Go route', props<{ routingLink: string }>());
