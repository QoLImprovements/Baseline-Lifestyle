/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-drink",
  "description": "Liquor and cocktails",
  "id": "usda-fndds-2710640",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-drink",
      "kind": "unit",
      "label": "1 drink"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Martini, flavored",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 6.36,
    "energy_kcal": 187.0,
    "fat_g": 0.03,
    "fibre_g": 0.1,
    "folate_ug": 2.0,
    "iron_mg": 0.05,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 6.0,
    "potassium_mg": 27.0,
    "protein_g": 0.09,
    "salt_g": 0.0025,
    "sat_fat_g": 0.002,
    "sodium_mg": 1.0,
    "sugar_g": 4.86,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 8.0,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710640",
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
