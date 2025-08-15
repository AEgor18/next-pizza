'use client';

import { Product } from '@prisma/client';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import React from 'react';
import { useRouter } from 'next/navigation';
import { ChoosePizzaForm } from '../choose-pizza-form';

interface Props {
	product: Product;
	className?: string;
}
//тест
export const ChooseProductModal: React.FC<Props> = ({ className, product }) => {
	const router = useRouter();

	return (
		<Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
			<DialogContent className='p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden'>
				<ChoosePizzaForm />
			</DialogContent>
		</Dialog>
	);
};
