'use client';

import React, { useEffect } from 'react';
import { useIntersection } from 'react-use';
import { Title } from './title';
import { cn } from '@/lib/utils';
import { ProductCard } from './product-card';
import { useCategoryStore } from '@/store/category';

interface Props {
	title: string;
	items: any[];
	categoryId: number;
	listClassName?: string;
	className?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
	title,
	items,
	categoryId,
	listClassName,
	className,
}) => {
	const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
	const intersectionRef = React.useRef(null);
	const intersection = useIntersection(intersectionRef, {
		threshold: 0.4,
	});

	useEffect(() => {
		if (intersection?.isIntersecting) {
			setActiveCategoryId(categoryId);
		}
	}, [categoryId, intersection?.isIntersecting, title]);
	return (
		<div className={className} id={title} ref={intersectionRef}>
			<Title text={title} size='lg' className='font-extrabold mb-5' />
			<div className={cn(listClassName, 'grid grid-cols-3 gap-[50px]')}>
				{items.map((item, i) => (
					<ProductCard
						key={item.id}
						name={item.name}
						imageUrl={item.imageUrl}
						price={item.items[0].price}
						id={item.id}
					/>
				))}
			</div>
		</div>
	);
};
