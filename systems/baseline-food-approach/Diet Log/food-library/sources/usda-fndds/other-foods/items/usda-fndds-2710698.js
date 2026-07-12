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
  "id": "usda-fndds-2710698",
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
      "gramsPerUnit": 150.0,
      "key": "1-glass",
      "kind": "unit",
      "label": "1 glass"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Glug",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 6.24,
    "energy_kcal": 96.0,
    "fat_g": 0.14,
    "fibre_g": 0.1,
    "folate_ug": 1.0,
    "iron_mg": 0.47,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 23.0,
    "potassium_mg": 125.0,
    "protein_g": 0.1,
    "salt_g": 0.01,
    "sat_fat_g": 0.098,
    "sodium_mg": 4.0,
    "sugar_g": 4.15,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710698",
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
