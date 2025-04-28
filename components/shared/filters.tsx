'use client';
import React from 'react';
import { Title } from './title';
import { Input } from '@/components/ui/input';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { useIngredients } from '@/hooks/useIngredients';
import { useFilters } from '@/hooks/useFilters';
import { useQueryFilters } from '@/hooks/useQueryFilters';

interface Props {
	className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
	const { ingredients, loading } = useIngredients();
	const filters = useFilters();

	useQueryFilters(filters);

	const items = ingredients.map((item) => ({
		text: String(item.name),
		value: String(item.id),
	}));

	const updatePrices = (prices: number[]) => {
		filters.setPrices('priceFrom', prices[0]);
		filters.setPrices('priceTo', prices[1]);
	};

	return (
		<div className={className}>
			<Title text='Фильтрация' size='sm' className='mb-5 font-bold' />

			<CheckboxFiltersGroup
				name='pizzaTypes'
				className='mb-5'
				title='Тип теста'
				onClickCheckbox={filters.setPizzaTypes}
				selected={filters.pizzaTypes}
				items={[
					{ text: 'Тонкое', value: '1' },
					{ text: 'Традиционное', value: '2' },
				]}
			/>

			<CheckboxFiltersGroup
				name='sizes'
				className='mb-5'
				title='Размеры'
				onClickCheckbox={filters.setSizes}
				selected={filters.sizes}
				items={[
					{ text: '20см', value: '20' },
					{ text: '30см', value: '30' },
					{ text: '40см', value: '40' },
				]}
			/>

			<div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
				<p className='font-bold mb-3'>Цена от и до:</p>
				<div className='flex gap-3 mb-5'>
					<Input
						type='number'
						placeholder='0'
						min={0}
						max={1000}
						value={String(filters.prices.priceFrom)}
						onChange={(e) =>
							filters.setPrices(
								'priceFrom',
								Number(e.target.value)
							)
						}
					/>
					<Input
						type='number'
						min={100}
						max={1000}
						placeholder='5000'
						value={String(filters.prices.priceTo)}
						onChange={(e) =>
							filters.setPrices('priceTo', Number(e.target.value))
						}
					/>
				</div>
				<RangeSlider
					min={0}
					max={1000}
					step={10}
					value={[
						filters.prices.priceFrom || 0,
						filters.prices.priceTo || 0,
					]}
					onValueChange={updatePrices}
				/>
			</div>

			<CheckboxFiltersGroup
				name='ingredients'
				className='mt-5'
				title='Ингредиенты'
				limit={6}
				defaultItems={items.slice(0, 6)}
				items={items}
				loading={loading}
				onClickCheckbox={filters.setSelectedIngredients}
				selected={filters.selectedIngredients}
			/>
		</div>
	);
};
