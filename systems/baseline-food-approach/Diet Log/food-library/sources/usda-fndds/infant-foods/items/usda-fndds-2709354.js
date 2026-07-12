/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "quantity-not-specified",
  "description": "Baby food: fruit",
  "id": "usda-fndds-2709354",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-tub",
      "kind": "unit",
      "label": "1 tub"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-jar",
      "kind": "unit",
      "label": "1 jar"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-pouch",
      "kind": "unit",
      "label": "1 pouch"
    }
  ],
  "name": "Baby Toddler multiple fruit, Stage 3",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 16.4,
    "energy_kcal": 68.0,
    "fat_g": 0.21,
    "fibre_g": 1.7,
    "folate_ug": 12.0,
    "iron_mg": 0.26,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 15.0,
    "potassium_mg": 199.0,
    "protein_g": 0.68,
    "salt_g": 0.005,
    "sat_fat_g": 0.049,
    "sodium_mg": 2.0,
    "sugar_g": 10.5,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 29.5,
    "vitamin_e_mg": 0.51,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709354",
  "state": "Unspecified",
  "subcategory": "Baby food: fruit",
  "tags": [
    "baby-food-fruit",
    "infant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
