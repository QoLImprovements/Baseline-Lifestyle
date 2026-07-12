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
  "id": "usda-fndds-2707242",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 80.0,
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
  "name": "Egg omelet or scrambled egg, with cheese and tomatoes, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 142.0,
    "carbs_g": 1.95,
    "energy_kcal": 154.0,
    "fat_g": 10.9,
    "fibre_g": 0.2,
    "folate_ug": 44.0,
    "iron_mg": 1.37,
    "magnesium_mg": 13.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 211.0,
    "potassium_mg": 151.0,
    "protein_g": 12.0,
    "salt_g": 0.7625,
    "sat_fat_g": 4.34,
    "sodium_mg": 305.0,
    "sugar_g": 0.87,
    "vitamin_a_ug": 174.0,
    "vitamin_c_mg": 2.2,
    "vitamin_e_mg": 0.96,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707242",
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
