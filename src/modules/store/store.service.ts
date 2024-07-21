import { Injectable } from '@nestjs/common';
import { StoreRepository } from './store.repository';
import { CreateStoreArgs } from './dto/create-store.args';

@Injectable()
export class StoreService {
	constructor(private readonly storeRepository: StoreRepository) {}

	getAllStores() {
		return this.storeRepository.find();
	}

	getStoreById(store_id: string) {
		return this.storeRepository.findOne(store_id);
	}

	getStoresByUserId(user_id: string) {
		return this.storeRepository.findStoresByUserId(user_id);
	}

	createStore(store: CreateStoreArgs) {
		return this.storeRepository.create(store);
	}
}
