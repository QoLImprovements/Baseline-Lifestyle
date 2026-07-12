/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-cubic-inch",
  "description": "Cakes and pies",
  "id": "usda-fndds-2708045",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    }
  ],
  "name": "Basbousa",
  "nutritionPerBasis": {
    "calcium_mg": 119.0,
    "carbs_g": 43.8,
    "energy_kcal": 282.0,
    "fat_g": 9.94,
    "fibre_g": 0.8,
    "folate_ug": 24.0,
    "iron_mg": 1.2,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 108.0,
    "potassium_mg": 148.0,
    "protein_g": 4.81,
    "salt_g": 0.2025,
    "sat_fat_g": 2.43,
    "sodium_mg": 81.0,
    "sugar_g": 29.8,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 1.3,
    "vitamin_k_ug": 3.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708045",
  "state": "Unspecified",
  "subcategory": "Cakes and pies",
  "tags": [
    "cakes-and-pies",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
