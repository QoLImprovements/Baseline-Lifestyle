/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-cup-cooked",
  "description": "Rice",
  "id": "usda-fndds-2708430",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "1-cup-cooked",
      "kind": "unit",
      "label": "1 cup, cooked"
    },
    {
      "gramsPerUnit": 116.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Rice, brown and wild, cooked, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 24.3,
    "energy_kcal": 138.0,
    "fat_g": 3.24,
    "fibre_g": 1.6,
    "folate_ug": 11.0,
    "iron_mg": 0.55,
    "magnesium_mg": 37.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 97.0,
    "potassium_mg": 85.0,
    "protein_g": 2.82,
    "salt_g": 0.505,
    "sat_fat_g": 0.544,
    "sodium_mg": 202.0,
    "sugar_g": 0.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.63,
    "vitamin_k_ug": 2.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708430",
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
