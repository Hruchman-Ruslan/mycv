import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';

export class SerializerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    // Run something before a request is handler
    // by the request handler
    console.log('Im running before the handler', context);

    return handler.handle().pipe(
      map((data: any) => {
        // Run something before the response is sent out
        console.log('Im running before response is sent out', data);
      }),
    );
  }
}
