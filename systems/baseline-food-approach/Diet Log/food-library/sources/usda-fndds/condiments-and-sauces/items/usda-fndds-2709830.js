/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "1-cup",
  "description": "Vegetable dishes",
  "id": "usda-fndds-2709830",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Greek Salad, no dressing",
  "nutritionPerBasis": {
    "calcium_mg": 57.0,
    "carbs_g": 4.35,
    "energy_kcal": 48.0,
    "fat_g": 2.26,
    "fibre_g": 1.5,
    "folate_ug": 36.0,
    "iron_mg": 0.9,
    "magnesium_mg": 13.0,
    "omega3_g": 0.064,
    "phosphorus_mg": 45.0,
    "potassium_mg": 228.0,
    "protein_g": 2.75,
    "salt_g": 0.615,
    "sat_fat_g": 0.859,
    "sodium_mg": 246.0,
    "sugar_g": 1.43,
    "vitamin_a_ug": 240.0,
    "vitamin_c_mg": 5.5,
    "vitamin_e_mg": 0.41,
    "vitamin_k_ug": 55.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709830",
  "state": "Unspecified",
  "subcategory": "Vegetable dishes",
  "tags": [
    "condiments-and-sauces",
    "unspecified",
    "vegetable-dishes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
