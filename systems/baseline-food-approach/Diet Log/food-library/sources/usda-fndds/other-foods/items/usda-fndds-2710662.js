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
  "id": "usda-fndds-2710662",
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
      "gramsPerUnit": 30.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 225.0,
      "key": "1-drink",
      "kind": "unit",
      "label": "1 drink"
    }
  ],
  "name": "Pina Colada",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 19.5,
    "energy_kcal": 151.0,
    "fat_g": 2.14,
    "fibre_g": 0.1,
    "folate_ug": 12.0,
    "iron_mg": 0.21,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 8.0,
    "potassium_mg": 90.0,
    "protein_g": 0.36,
    "salt_g": 0.015,
    "sat_fat_g": 1.96,
    "sodium_mg": 6.0,
    "sugar_g": 17.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 5.9,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710662",
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
