/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "1-cup-cooked",
  "description": "Rice",
  "id": "usda-fndds-2708412",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 196.0,
      "key": "1-cup-cooked",
      "kind": "unit",
      "label": "1 cup, cooked"
    },
    {
      "gramsPerUnit": 147.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Rice, brown, cooked, made with margarine",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 25.2,
    "energy_kcal": 134.0,
    "fat_g": 2.6,
    "fibre_g": 1.0,
    "folate_ug": 5.0,
    "iron_mg": 0.39,
    "magnesium_mg": 39.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 95.0,
    "potassium_mg": 79.0,
    "protein_g": 2.38,
    "salt_g": 0.5325,
    "sat_fat_g": 0.493,
    "sodium_mg": 213.0,
    "sugar_g": 0.22,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.62,
    "vitamin_k_ug": 2.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708412",
  "state": "Cooked",
  "subcategory": "Rice",
  "tags": [
    "cooked",
    "oils-and-fats",
    "rice"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
