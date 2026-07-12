/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "quantity-not-specified",
  "description": "Pasta sauces, tomato-based",
  "id": "usda-fndds-2709748",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 260.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Spaghetti sauce, fat free",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 5.31,
    "energy_kcal": 24.0,
    "fat_g": 0.3,
    "fibre_g": 1.5,
    "folate_ug": 9.0,
    "iron_mg": 0.96,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 27.0,
    "potassium_mg": 297.0,
    "protein_g": 1.2,
    "salt_g": 1.185,
    "sat_fat_g": 0.041,
    "sodium_mg": 474.0,
    "sugar_g": 3.56,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 7.0,
    "vitamin_e_mg": 1.44,
    "vitamin_k_ug": 2.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709748",
  "state": "Unspecified",
  "subcategory": "Pasta sauces, tomato-based",
  "tags": [
    "condiments-and-sauces",
    "pasta-sauces-tomato-based",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
