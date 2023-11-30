import { Collection } from '../models/Collection';
import { User, UserProps } from '../models/User';
import { View } from './View';

export abstract class CollectionView extends View<User, UserProps> {}
