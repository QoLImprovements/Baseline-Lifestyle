/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-egg",
  "description": "Eggs and omelets",
  "id": "usda-fndds-2707272",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "1-egg",
      "kind": "unit",
      "label": "1 egg"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Egg omelet or scrambled egg, with cheese, meat, tomatoes, and dark-green vegetables, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 135.0,
    "carbs_g": 1.89,
    "energy_kcal": 160.0,
    "fat_g": 11.4,
    "fibre_g": 0.2,
    "folate_ug": 45.0,
    "iron_mg": 1.38,
    "magnesium_mg": 18.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 214.0,
    "potassium_mg": 177.0,
    "protein_g": 12.6,
    "salt_g": 0.91,
    "sat_fat_g": 4.42,
    "sodium_mg": 364.0,
    "sugar_g": 0.76,
    "vitamin_a_ug": 173.0,
    "vitamin_c_mg": 3.1,
    "vitamin_e_mg": 0.99,
    "vitamin_k_ug": 24.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707272",
  "state": "Scrambled",
  "subcategory": "Eggs and omelets",
  "tags": [
    "eggs-and-omelets",
    "meat-and-poultry",
    "scrambled"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
