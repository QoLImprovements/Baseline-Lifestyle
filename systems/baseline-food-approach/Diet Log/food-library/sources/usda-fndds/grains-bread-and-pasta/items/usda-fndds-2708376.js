/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "quantity-not-specified",
  "description": "Grits and other cooked cereals",
  "id": "usda-fndds-2708376",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-cup-cooked",
      "kind": "unit",
      "label": "1 cup, cooked"
    }
  ],
  "name": "Masa harina, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 20.5,
    "energy_kcal": 97.0,
    "fat_g": 0.99,
    "fibre_g": 1.7,
    "folate_ug": 18.0,
    "iron_mg": 1.33,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 62.0,
    "potassium_mg": 70.0,
    "protein_g": 2.26,
    "salt_g": 0.7075,
    "sat_fat_g": 0.142,
    "sodium_mg": 283.0,
    "sugar_g": 0.43,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708376",
  "state": "Cooked",
  "subcategory": "Grits and other cooked cereals",
  "tags": [
    "cooked",
    "grains-bread-and-pasta",
    "grits-and-other-cooked-cereals"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
