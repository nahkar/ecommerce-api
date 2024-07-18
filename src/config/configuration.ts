import { config } from 'dotenv';

config({ path: `.env.${process.env.NODE_ENV}` });

export default () => ({
	ENV: process.env.NODE_ENV,
	PORT: parseInt(process.env.PORT, 10),
});
