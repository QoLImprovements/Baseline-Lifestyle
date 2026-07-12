/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-fl-oz",
  "description": "Liquor and cocktails",
  "id": "usda-fndds-2710629",
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
    }
  ],
  "name": "Cape Cod",
  "nutritionPerBasis": {
    "calcium_mg": 2.0,
    "carbs_g": 10.2,
    "energy_kcal": 98.0,
    "fat_g": 0.08,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.08,
    "magnesium_mg": 1.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 2.0,
    "potassium_mg": 11.0,
    "protein_g": 0.0,
    "salt_g": 0.005,
    "sat_fat_g": 0.007,
    "sodium_mg": 2.0,
    "sugar_g": 8.94,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 31.8,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710629",
  "state": "Unspecified",
  "subcategory": "Liquor and cocktails",
  "tags": [
    "fish-and-seafood",
    "liquor-and-cocktails",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
