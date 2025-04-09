import { Api } from '@/services/api-client';
import { Ingredient } from '@prisma/client';
import React, { useEffect, useState } from 'react';

interface ReturnProps {
	ingredients: Ingredient[];
	loading: boolean;
}

export const UseFilterIngredients = (): ReturnProps => {
	const [ingredients, setIngredients] = useState<Ingredient[]>([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		async function fetchIngredients() {
			try {
				setLoading(true);
				const ingredients = await Api.ingredients.getAll();
				setIngredients(ingredients);
			} catch (e) {
				setLoading(false);
				console.log(e);
			} finally {
				setLoading(false);
			}
		}

		fetchIngredients();
	}, []);

	return { ingredients, loading };
};
