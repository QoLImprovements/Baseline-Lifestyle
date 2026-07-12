/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-fl-oz",
  "description": "Liquor and cocktails",
  "id": "usda-fndds-2710684",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-drink",
      "kind": "unit",
      "label": "1 drink"
    }
  ],
  "name": "Eggnog, alcoholic",
  "nutritionPerBasis": {
    "calcium_mg": 107.0,
    "carbs_g": 6.62,
    "energy_kcal": 113.0,
    "fat_g": 3.45,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.17,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 90.0,
    "potassium_mg": 136.0,
    "protein_g": 3.74,
    "salt_g": 0.1125,
    "sat_fat_g": 2.13,
    "sodium_mg": 45.0,
    "sugar_g": 6.62,
    "vitamin_a_ug": 49.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710684",
  "state": "Unspecified",
  "subcategory": "Liquor and cocktails",
  "tags": [
    "liquor-and-cocktails",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
