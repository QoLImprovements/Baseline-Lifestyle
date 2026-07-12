/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "1-whole-pimiento",
  "description": "Mustard and other condiments",
  "id": "usda-fndds-2709979",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 66.0,
      "key": "1-whole-pimiento",
      "kind": "unit",
      "label": "1 whole pimiento"
    },
    {
      "gramsPerUnit": 192.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 12.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 1.0,
      "key": "1-strip",
      "kind": "unit",
      "label": "1 strip"
    }
  ],
  "name": "Pimiento",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 6.24,
    "energy_kcal": 28.0,
    "fat_g": 0.37,
    "fibre_g": 2.3,
    "folate_ug": 7.0,
    "iron_mg": 2.06,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 21.0,
    "potassium_mg": 193.0,
    "protein_g": 1.35,
    "salt_g": 0.0425,
    "sat_fat_g": 0.055,
    "sodium_mg": 17.0,
    "sugar_g": 3.32,
    "vitamin_a_ug": 163.0,
    "vitamin_c_mg": 104.0,
    "vitamin_e_mg": 0.84,
    "vitamin_k_ug": 10.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709979",
  "state": "Unspecified",
  "subcategory": "Mustard and other condiments",
  "tags": [
    "condiments-and-sauces",
    "mustard-and-other-condiments",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
