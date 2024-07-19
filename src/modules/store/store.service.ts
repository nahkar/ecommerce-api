import { Injectable } from '@nestjs/common';
import { StoreRepository } from './store.repository';

@Injectable()
export class StoreService {
	constructor(private readonly storeRepository: StoreRepository) {}

	getAllStores() {
		return this.storeRepository.find();
	}
}
