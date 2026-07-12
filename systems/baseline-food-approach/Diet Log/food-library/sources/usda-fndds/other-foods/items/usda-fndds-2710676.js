/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "quantity-not-specified",
  "description": "Liquor and cocktails",
  "id": "usda-fndds-2710676",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 225.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 225.0,
      "key": "1-drink",
      "kind": "unit",
      "label": "1 drink"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    }
  ],
  "name": "Singapore Sling",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 7.25,
    "energy_kcal": 93.0,
    "fat_g": 0.04,
    "fibre_g": 0.2,
    "folate_ug": 2.0,
    "iron_mg": 0.03,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 4.0,
    "potassium_mg": 31.0,
    "protein_g": 0.12,
    "salt_g": 0.0375,
    "sat_fat_g": 0.007,
    "sodium_mg": 15.0,
    "sugar_g": 6.16,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 3.8,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710676",
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
