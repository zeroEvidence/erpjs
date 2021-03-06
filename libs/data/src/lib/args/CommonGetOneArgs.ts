import { Min } from 'class-validator';
import { ArgsType, Field, Int } from 'type-graphql';

@ArgsType()
export class CommonGetOneArgs {
    @Field(type => Int)
    @Min(1)
    id: number;
}
