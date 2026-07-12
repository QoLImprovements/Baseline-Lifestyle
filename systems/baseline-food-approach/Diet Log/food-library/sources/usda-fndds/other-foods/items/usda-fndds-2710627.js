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
  "id": "usda-fndds-2710627",
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
      "gramsPerUnit": 90.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-drink",
      "kind": "unit",
      "label": "1 drink"
    }
  ],
  "name": "Brandy Alexander",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 18.9,
    "energy_kcal": 238.0,
    "fat_g": 3.83,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.05,
    "magnesium_mg": 4.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 34.0,
    "potassium_mg": 55.0,
    "protein_g": 1.05,
    "salt_g": 0.0575,
    "sat_fat_g": 2.31,
    "sodium_mg": 23.0,
    "sugar_g": 15.7,
    "vitamin_a_ug": 31.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710627",
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
