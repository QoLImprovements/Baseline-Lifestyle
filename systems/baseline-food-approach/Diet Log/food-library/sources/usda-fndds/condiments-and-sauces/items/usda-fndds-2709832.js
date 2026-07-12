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
  "id": "usda-fndds-2709832",
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
  "name": "Cobb salad, no dressing",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 2.65,
    "energy_kcal": 93.0,
    "fat_g": 4.33,
    "fibre_g": 1.2,
    "folate_ug": 25.0,
    "iron_mg": 0.45,
    "magnesium_mg": 18.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 120.0,
    "potassium_mg": 281.0,
    "protein_g": 11.3,
    "salt_g": 0.3975,
    "sat_fat_g": 1.05,
    "sodium_mg": 159.0,
    "sugar_g": 1.1,
    "vitamin_a_ug": 82.0,
    "vitamin_c_mg": 9.0,
    "vitamin_e_mg": 0.66,
    "vitamin_k_ug": 31.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709832",
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
