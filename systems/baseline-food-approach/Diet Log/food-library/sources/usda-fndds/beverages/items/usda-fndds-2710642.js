/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "1-drink",
  "description": "Wine",
  "id": "usda-fndds-2710642",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "1-drink",
      "kind": "unit",
      "label": "1 drink"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    }
  ],
  "name": "Mimosa",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 6.49,
    "energy_kcal": 64.0,
    "fat_g": 0.18,
    "fibre_g": 0.2,
    "folate_ug": 16.0,
    "iron_mg": 0.16,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 18.0,
    "potassium_mg": 128.0,
    "protein_g": 0.43,
    "salt_g": 0.01,
    "sat_fat_g": 0.007,
    "sodium_mg": 4.0,
    "sugar_g": 4.67,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 14.7,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710642",
  "state": "Unspecified",
  "subcategory": "Wine",
  "tags": [
    "beverages",
    "unspecified",
    "wine"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
