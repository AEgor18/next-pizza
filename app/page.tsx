import { Container, Filters, Title, TopBar } from '@/components/shared';
import { ProductsGroupList } from '@/components/shared/products-group-list';
import React from 'react';

export default function Home() {
	return (
		<>
			<Container>
				<Title text='Все пиццы' size='lg' className='font-extrabold' />
			</Container>

			<TopBar />

			<Container className='mt-10 pb-14'>
				<div className='flex gap-[80px]'>
					<div className='w-[250px]'>
						<Filters />
					</div>

					<div className='flex-1'>
						<div className='flex flex-col gap-16'>
							<ProductsGroupList
								title='Пиццы'
								items={[
									{
										id: 1,
										name: 'Чизбургер-пицца',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/019591c69fac7921a27e4ecd8c99f9df.jpg',
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 1,
										name: 'Чизбургер-пицца',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/019591c69fac7921a27e4ecd8c99f9df.jpg',
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 1,
										name: 'Чизбургер-пицца',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/019591c69fac7921a27e4ecd8c99f9df.jpg',
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 1,
										name: 'Чизбургер-пицца',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/019591c69fac7921a27e4ecd8c99f9df.jpg',
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 1,
										name: 'Чизбургер-пицца',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/019591c69fac7921a27e4ecd8c99f9df.jpg',
										price: 550,
										items: [{ price: 550 }],
									},
								]}
								categoryId={1}
							/>
							<ProductsGroupList
								title='Комбо'
								items={[
									{
										id: 1,
										name: 'Чизбургер-пицца',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/019591c69fac7921a27e4ecd8c99f9df.jpg',
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 1,
										name: 'Чизбургер-пицца',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/019591c69fac7921a27e4ecd8c99f9df.jpg',
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 1,
										name: 'Чизбургер-пицца',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/019591c69fac7921a27e4ecd8c99f9df.jpg',
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 1,
										name: 'Чизбургер-пицца',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/019591c69fac7921a27e4ecd8c99f9df.jpg',
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 1,
										name: 'Чизбургер-пицца',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/019591c69fac7921a27e4ecd8c99f9df.jpg',
										price: 550,
										items: [{ price: 550 }],
									},
								]}
								categoryId={2}
							/>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
}
