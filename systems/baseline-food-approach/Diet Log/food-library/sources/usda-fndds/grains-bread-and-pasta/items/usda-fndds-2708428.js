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
  "id": "usda-fndds-2708428",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 168.0,
      "key": "1-cup-cooked",
      "kind": "unit",
      "label": "1 cup, cooked"
    },
    {
      "gramsPerUnit": 126.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Rice, white and wild, cooked, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 20.6,
    "energy_kcal": 112.0,
    "fat_g": 2.14,
    "fibre_g": 0.5,
    "folate_ug": 38.0,
    "iron_mg": 0.98,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 41.0,
    "potassium_mg": 41.0,
    "protein_g": 2.17,
    "salt_g": 1.275,
    "sat_fat_g": 0.412,
    "sodium_mg": 510.0,
    "sugar_g": 0.13,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.28,
    "vitamin_k_ug": 2.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708428",
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
