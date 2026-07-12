/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-egg",
  "description": "Eggs and omelets",
  "id": "usda-fndds-2707172",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "1-egg",
      "kind": "unit",
      "label": "1 egg"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Egg, yolk only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 129.0,
    "carbs_g": 1.02,
    "energy_kcal": 328.0,
    "fat_g": 28.8,
    "fibre_g": 0.0,
    "folate_ug": 146.0,
    "iron_mg": 2.73,
    "magnesium_mg": 5.0,
    "omega3_g": 0.125,
    "phosphorus_mg": 390.0,
    "potassium_mg": 109.0,
    "protein_g": 16.2,
    "salt_g": 0.12,
    "sat_fat_g": 9.55,
    "sodium_mg": 48.0,
    "sugar_g": 0.56,
    "vitamin_a_ug": 381.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 5.64,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707172",
  "state": "Raw",
  "subcategory": "Eggs and omelets",
  "tags": [
    "eggs-and-omelets",
    "milk-dairy-and-eggs",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
