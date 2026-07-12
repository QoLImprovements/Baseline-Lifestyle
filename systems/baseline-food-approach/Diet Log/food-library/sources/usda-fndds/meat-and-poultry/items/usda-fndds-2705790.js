/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "topping-per-surface-inch-of-pizza",
  "description": "Pizza",
  "id": "usda-fndds-2705790",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 2.6,
      "key": "topping-per-surface-inch-of-pizza",
      "kind": "unit",
      "label": "Topping per surface inch of pizza"
    },
    {
      "gramsPerUnit": 168.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 51.0,
      "key": "topping-from-1-piece",
      "kind": "unit",
      "label": "Topping from 1 piece"
    },
    {
      "gramsPerUnit": 102.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Topping from meat and vegetable pizza",
  "nutritionPerBasis": {
    "calcium_mg": 286.0,
    "carbs_g": 7.66,
    "energy_kcal": 299.0,
    "fat_g": 22.0,
    "fibre_g": 1.0,
    "folate_ug": 17.0,
    "iron_mg": 0.97,
    "magnesium_mg": 27.0,
    "omega3_g": 0.019,
    "phosphorus_mg": 285.0,
    "potassium_mg": 322.0,
    "protein_g": 17.6,
    "salt_g": 2.0925,
    "sat_fat_g": 9.55,
    "sodium_mg": 837.0,
    "sugar_g": 4.09,
    "vitamin_a_ug": 98.0,
    "vitamin_c_mg": 11.0,
    "vitamin_e_mg": 1.42,
    "vitamin_k_ug": 7.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705790",
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
