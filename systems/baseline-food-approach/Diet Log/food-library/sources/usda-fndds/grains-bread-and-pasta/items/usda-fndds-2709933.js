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
  "id": "usda-fndds-2709933",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Hominy, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 13.8,
    "energy_kcal": 88.0,
    "fat_g": 2.91,
    "fibre_g": 2.4,
    "folate_ug": 1.0,
    "iron_mg": 0.6,
    "magnesium_mg": 16.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 34.0,
    "potassium_mg": 9.0,
    "protein_g": 1.45,
    "salt_g": 1.2525,
    "sat_fat_g": 1.01,
    "sodium_mg": 501.0,
    "sugar_g": 1.47,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.25,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709933",
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
