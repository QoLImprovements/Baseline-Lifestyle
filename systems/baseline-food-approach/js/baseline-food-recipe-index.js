(function(global){
  'use strict';

  /* Lightweight Food recipe registry.
     Recipe bodies live only in /recipes/*.html; the parent Food page consumes
     this index for overview navigation and ingredient filtering. */
  global.BASELINE_FOOD_RECIPE_INDEX = Object.freeze([
  {
    "id": "r1",
    "slug": "raw-40-c-almond-flax-pizza-base",
    "title": "Raw 40°C Almond–Flax Pizza Base",
    "category": "Dehydrator",
    "href": "/baseline-food-approach/recipes/raw-40-c-almond-flax-pizza-base",
    "ingredients": [
      "ing-almonds",
      "ing-water",
      "ing-flaxseed",
      "ing-nutritional-yeast",
      "ing-parsley",
      "ing-basil",
      "ing-sea-salt",
      "ing-lemon"
    ]
  },
  {
    "id": "r2",
    "slug": "creamy-stovetop-polenta",
    "title": "Creamy Stovetop Polenta",
    "category": "Stovetop",
    "href": "/baseline-food-approach/recipes/creamy-stovetop-polenta",
    "ingredients": [
      "ing-polenta",
      "ing-herbes-de-provence",
      "ing-sea-salt",
      "ing-tahini",
      "ing-nutritional-yeast",
      "ing-water",
      "ing-avocado",
      "ing-lemon"
    ]
  },
  {
    "id": "r3",
    "slug": "pure-stovetop-chickpea-baked-beans",
    "title": "Pure Stovetop Chickpea Baked Beans",
    "category": "Stovetop",
    "href": "/baseline-food-approach/recipes/pure-stovetop-chickpea-baked-beans",
    "ingredients": [
      "ing-chickpeas",
      "ing-tomatoes",
      "ing-carrot",
      "ing-mushrooms",
      "ing-water",
      "ing-herbes-de-provence",
      "ing-sage",
      "ing-sea-salt",
      "ing-brazil-nut-butter",
      "ing-lemon"
    ]
  },
  {
    "id": "r4",
    "slug": "hearty-oat-porridge-with-apple-pear-and-vanilla",
    "title": "Hearty Oat Porridge with Apple, Pear & Vanilla",
    "category": "Stovetop",
    "href": "/baseline-food-approach/recipes/hearty-oat-porridge-with-apple-pear-and-vanilla",
    "ingredients": [
      "ing-apple",
      "ing-pear",
      "ing-water",
      "ing-jumbo-oats",
      "ing-vanilla-bean-powder",
      "ing-lemon",
      "ing-peanut-butter",
      "ing-ground-cinnamon",
      "ing-sea-salt"
    ]
  },
  {
    "id": "r5",
    "slug": "creamy-mushroom-sauce",
    "title": "Creamy Mushroom Sauce",
    "category": "Stovetop",
    "href": "/baseline-food-approach/recipes/creamy-mushroom-sauce",
    "ingredients": [
      "ing-mushrooms",
      "ing-sea-salt",
      "ing-parsley",
      "ing-water",
      "ing-tahini",
      "ing-cornflour",
      "ing-cassava-flour"
    ]
  },
  {
    "id": "r6",
    "slug": "mushroom-and-rosemary-oat-groats-risotto",
    "title": "Mushroom and Rosemary Oat Groats Risotto",
    "category": "Pressure Cooker",
    "href": "/baseline-food-approach/recipes/mushroom-and-rosemary-oat-groats-risotto",
    "ingredients": [
      "ing-oat-groats",
      "ing-water",
      "ing-mushrooms",
      "ing-rosemary",
      "ing-sage",
      "ing-brazil-nut-butter",
      "ing-lemon",
      "ing-nutritional-yeast",
      "ing-sea-salt"
    ]
  },
  {
    "id": "r7",
    "slug": "sattu-balanced-nut-butter-spread-base",
    "title": "Sattu-Balanced Nut Butter Spread Base",
    "category": "Stovetop",
    "href": "/baseline-food-approach/recipes/sattu-balanced-nut-butter-spread-base",
    "ingredients": [
      "ing-almond-butter",
      "ing-sattu",
      "ing-flaxseed",
      "ing-sea-salt",
      "ing-lemon",
      "ing-water"
    ]
  },
  {
    "id": "r8",
    "slug": "sweet-potato-and-bell-pepper-sauce",
    "title": "Sweet Potato & Bell Pepper Sauce",
    "category": "Stovetop",
    "href": "/baseline-food-approach/recipes/sweet-potato-and-bell-pepper-sauce",
    "ingredients": [
      "ing-sweet-potato",
      "ing-red-pepper",
      "ing-cashews",
      "ing-cashew-butter",
      "ing-water",
      "ing-dried-herbs",
      "ing-lemon",
      "ing-sea-salt"
    ]
  },
  {
    "id": "r9",
    "slug": "aubergine-and-carrot-sauce",
    "title": "Aubergine & Carrot Sauce",
    "category": "Stovetop",
    "href": "/baseline-food-approach/recipes/aubergine-and-carrot-sauce",
    "ingredients": [
      "ing-aubergine",
      "ing-carrot",
      "ing-cashews",
      "ing-cashew-butter",
      "ing-water",
      "ing-parsley",
      "ing-lemon",
      "ing-sea-salt"
    ]
  },
  {
    "id": "r10",
    "slug": "tomato-and-red-pepper-sauce",
    "title": "Tomato & Red Pepper Sauce",
    "category": "Stovetop",
    "href": "/baseline-food-approach/recipes/tomato-and-red-pepper-sauce",
    "ingredients": [
      "ing-tomatoes",
      "ing-red-pepper",
      "ing-cashews",
      "ing-cashew-butter",
      "ing-water",
      "ing-basil",
      "ing-lemon",
      "ing-sea-salt"
    ]
  },
  {
    "id": "r11",
    "slug": "potato-and-carrot-vegan-cheese",
    "title": "Potato & Carrot Vegan Cheese",
    "category": "Stovetop",
    "href": "/baseline-food-approach/recipes/potato-and-carrot-vegan-cheese",
    "ingredients": [
      "ing-potato",
      "ing-carrot",
      "ing-water",
      "ing-nutritional-yeast",
      "ing-almond-butter",
      "ing-lemon",
      "ing-sea-salt",
      "ing-tapioca-starch",
      "ing-turmeric"
    ]
  },
  {
    "id": "r12",
    "slug": "mung-bean-and-peanut-vegetable-hotpot",
    "title": "Mung Bean & Peanut Vegetable Hotpot",
    "category": "Slow Cooker",
    "href": "/baseline-food-approach/recipes/mung-bean-and-peanut-vegetable-hotpot",
    "ingredients": [
      "ing-potato",
      "ing-carrot",
      "ing-mung-beans",
      "ing-peas",
      "ing-sweetcorn",
      "ing-spinach",
      "ing-tomatoes",
      "ing-red-pepper",
      "ing-yellow-pepper",
      "ing-green-pepper",
      "ing-peanut-butter",
      "ing-dried-herbs",
      "ing-sea-salt",
      "ing-water",
      "ing-tapioca-starch",
      "ing-lemon"
    ]
  }
]);
})(window);
