/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "topping-from-1-piece",
  "description": "Pizza",
  "id": "usda-fndds-2705789",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 41.0,
      "key": "topping-from-1-piece",
      "kind": "unit",
      "label": "Topping from 1 piece"
    },
    {
      "gramsPerUnit": 82.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 168.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 2.1,
      "key": "topping-per-surface-inch-of-pizza",
      "kind": "unit",
      "label": "Topping per surface inch of pizza"
    }
  ],
  "name": "Topping from meat pizza",
  "nutritionPerBasis": {
    "calcium_mg": 314.0,
    "carbs_g": 5.65,
    "energy_kcal": 321.0,
    "fat_g": 24.5,
    "fibre_g": 0.7,
    "folate_ug": 14.0,
    "iron_mg": 0.97,
    "magnesium_mg": 27.0,
    "omega3_g": 0.023,
    "phosphorus_mg": 309.0,
    "potassium_mg": 302.0,
    "protein_g": 19.2,
    "salt_g": 2.335,
    "sat_fat_g": 10.6,
    "sodium_mg": 934.0,
    "sugar_g": 3.2,
    "vitamin_a_ug": 105.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 1.49,
    "vitamin_k_ug": 6.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705789",
  "state": "Unspecified",
  "subcategory": "Pizza",
  "tags": [
    "meat-and-poultry",
    "pizza",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
