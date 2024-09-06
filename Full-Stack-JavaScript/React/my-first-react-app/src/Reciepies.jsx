export const recipes = [{
    id: 'greek-salad',
    name: 'Greek Salad',
    ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
  }, {
    id: 'hawaiian-pizza',
    name: 'Hawaiian Pizza',
    ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
  }, {
    id: 'hummus',
    name: 'Hummus',
    ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
  }];
  
const recipesDisplay=recipes.map(recipeName=>

);

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
    <div>
        <h2>{recipes[0].name}</h2>
        
        <ul>{recipes[0].ingredients}</ul>
    </div>
    </div>
  );
}