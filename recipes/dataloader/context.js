import DataLoader from 'dataloader';

const capitalizer = new DataLoader(strs => Promise.resolve(strs.map(str => str.toUpperCase())));

export default () => ({
	capitalizer,
});
