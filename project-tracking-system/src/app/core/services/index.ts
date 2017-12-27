import { AuthService } from './authentication/auth.service';
import { HttpClientService } from './http-client.service';
import { ProjectsService } from './projects/projects.service';
import { ToastrService } from './toastr/toastr.service';

export const allServices = [ AuthService, HttpClientService, ProjectsService, ToastrService ]