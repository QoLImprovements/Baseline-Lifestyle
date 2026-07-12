/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Eggs and omelets",
  "id": "usda-fndds-2707247",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-egg",
      "kind": "unit",
      "label": "1 egg"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Egg omelet or scrambled egg, with cheese, tomatoes, and dark-green vegetables, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 138.0,
    "carbs_g": 1.83,
    "energy_kcal": 186.0,
    "fat_g": 14.8,
    "fibre_g": 0.2,
    "folate_ug": 46.0,
    "iron_mg": 1.34,
    "magnesium_mg": 17.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 201.0,
    "potassium_mg": 155.0,
    "protein_g": 11.4,
    "salt_g": 0.77,
    "sat_fat_g": 5.25,
    "sodium_mg": 308.0,
    "sugar_g": 0.72,
    "vitamin_a_ug": 196.0,
    "vitamin_c_mg": 3.1,
    "vitamin_e_mg": 1.63,
    "vitamin_k_ug": 28.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707247",
  "state": "Scrambled",
  "subcategory": "Eggs and omelets",
  "tags": [
    "eggs-and-omelets",
    "milk-dairy-and-eggs",
    "scrambled"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
