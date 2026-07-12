/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-cup-cooked",
  "description": "Grits and other cooked cereals",
  "id": "usda-fndds-2709128",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-cup-cooked",
      "kind": "unit",
      "label": "1 cup, cooked"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Upma",
  "nutritionPerBasis": {
    "calcium_mg": 96.0,
    "carbs_g": 13.8,
    "energy_kcal": 87.0,
    "fat_g": 2.64,
    "fibre_g": 1.3,
    "folate_ug": 19.0,
    "iron_mg": 4.06,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 29.0,
    "potassium_mg": 111.0,
    "protein_g": 1.98,
    "salt_g": 0.245,
    "sat_fat_g": 0.36,
    "sodium_mg": 98.0,
    "sugar_g": 1.61,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 11.0,
    "vitamin_e_mg": 0.83,
    "vitamin_k_ug": 5.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709128",
  "state": "Unspecified",
  "subcategory": "Grits and other cooked cereals",
  "tags": [
    "grains-bread-and-pasta",
    "grits-and-other-cooked-cereals",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
