/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-cup",
  "description": "Other red and orange vegetables",
  "id": "usda-fndds-2709801",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-regular",
      "kind": "unit",
      "label": "1 regular"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-ring",
      "kind": "unit",
      "label": "1 ring"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-miniature",
      "kind": "unit",
      "label": "1 miniature"
    }
  ],
  "name": "Peppers, sweet, red, raw",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 6.65,
    "energy_kcal": 31.0,
    "fat_g": 0.13,
    "fibre_g": 1.2,
    "folate_ug": 47.0,
    "iron_mg": 0.35,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 27.0,
    "potassium_mg": 213.0,
    "protein_g": 0.9,
    "salt_g": 0.0,
    "sat_fat_g": 0.059,
    "sodium_mg": 0.0,
    "sugar_g": 4.2,
    "vitamin_a_ug": 157.0,
    "vitamin_c_mg": 142.0,
    "vitamin_e_mg": 1.58,
    "vitamin_k_ug": 4.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709801",
  "state": "Raw",
  "subcategory": "Other red and orange vegetables",
  "tags": [
    "fruit",
    "other-red-and-orange-vegetables",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
