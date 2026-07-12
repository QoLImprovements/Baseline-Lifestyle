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
  "id": "usda-fndds-2710646",
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
    }
  ],
  "name": "Old fashioned",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 6.11,
    "energy_kcal": 164.0,
    "fat_g": 0.04,
    "fibre_g": 0.5,
    "folate_ug": 5.0,
    "iron_mg": 0.06,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 5.0,
    "potassium_mg": 32.0,
    "protein_g": 0.16,
    "salt_g": 0.01,
    "sat_fat_g": 0.004,
    "sodium_mg": 4.0,
    "sugar_g": 5.57,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 8.6,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710646",
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
