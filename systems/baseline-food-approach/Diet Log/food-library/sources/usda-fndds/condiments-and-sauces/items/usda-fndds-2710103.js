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
  "id": "usda-fndds-2710103",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "guideline-amount-per-piece-of-sushi",
      "kind": "unit",
      "label": "Guideline amount per piece of sushi"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    }
  ],
  "name": "Wasabi paste",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 46.1,
    "energy_kcal": 292.0,
    "fat_g": 10.9,
    "fibre_g": 6.1,
    "folate_ug": 10.0,
    "iron_mg": 0.5,
    "magnesium_mg": 21.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 26.0,
    "potassium_mg": 182.0,
    "protein_g": 2.23,
    "salt_g": 8.475,
    "sat_fat_g": 2.03,
    "sodium_mg": 3390.0,
    "sugar_g": 13.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.91,
    "vitamin_k_ug": 3.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710103",
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
