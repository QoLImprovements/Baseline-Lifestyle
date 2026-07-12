/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "quantity-not-specified",
  "description": "Mustard and other condiments",
  "id": "usda-fndds-2709309",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    }
  ],
  "name": "Chutney",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 60.6,
    "energy_kcal": 246.0,
    "fat_g": 0.06,
    "fibre_g": 1.0,
    "folate_ug": 10.0,
    "iron_mg": 0.43,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 17.0,
    "potassium_mg": 68.0,
    "protein_g": 0.33,
    "salt_g": 2.005,
    "sat_fat_g": 0.009,
    "sodium_mg": 802.0,
    "sugar_g": 42.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 7.7,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709309",
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
