/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-large-square-moon-cake",
  "description": "Doughnuts, sweet rolls, pastries",
  "id": "usda-fndds-2708049",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 204.0,
      "key": "1-large-square-moon-cake",
      "kind": "unit",
      "label": "1 large square Moon Cake"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 19.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 138.0,
      "key": "1-large-round-moon-cake",
      "kind": "unit",
      "label": "1 large round Moon Cake"
    }
  ],
  "name": "Pastry, made with bean paste and salted egg yolk filling, baked",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 57.0,
    "energy_kcal": 339.0,
    "fat_g": 8.61,
    "fibre_g": 2.2,
    "folate_ug": 87.0,
    "iron_mg": 2.6,
    "magnesium_mg": 19.0,
    "omega3_g": 0.021,
    "phosphorus_mg": 136.0,
    "potassium_mg": 123.0,
    "protein_g": 8.59,
    "salt_g": 1.3625,
    "sat_fat_g": 2.33,
    "sodium_mg": 545.0,
    "sugar_g": 30.5,
    "vitamin_a_ug": 83.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 1.37,
    "vitamin_k_ug": 4.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708049",
  "state": "Baked",
  "subcategory": "Doughnuts, sweet rolls, pastries",
  "tags": [
    "baked",
    "doughnuts-sweet-rolls-pastries",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
