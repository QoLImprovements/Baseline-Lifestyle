/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "quantity-not-specified",
  "description": "Rice",
  "id": "usda-fndds-2708424",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 123.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 164.0,
      "key": "1-cup-cooked",
      "kind": "unit",
      "label": "1 cup, cooked"
    }
  ],
  "name": "Rice, wild, 100%, cooked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 21.2,
    "energy_kcal": 100.0,
    "fat_g": 0.34,
    "fibre_g": 1.8,
    "folate_ug": 26.0,
    "iron_mg": 0.6,
    "magnesium_mg": 32.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 82.0,
    "potassium_mg": 100.0,
    "protein_g": 3.97,
    "salt_g": 0.595,
    "sat_fat_g": 0.049,
    "sodium_mg": 238.0,
    "sugar_g": 0.73,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708424",
  "state": "Cooked",
  "subcategory": "Rice",
  "tags": [
    "cooked",
    "grains-bread-and-pasta",
    "rice"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
