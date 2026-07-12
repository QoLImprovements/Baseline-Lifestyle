/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "quantity-not-specified",
  "description": "Baby food: vegetables",
  "id": "usda-fndds-2710121",
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
      "gramsPerUnit": 110.0,
      "key": "1-jar",
      "kind": "unit",
      "label": "1 jar"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-tub",
      "kind": "unit",
      "label": "1 tub"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-pouch",
      "kind": "unit",
      "label": "1 pouch"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    }
  ],
  "name": "Baby Toddler squash, Stage 2",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 5.73,
    "energy_kcal": 24.0,
    "fat_g": 0.2,
    "fibre_g": 0.9,
    "folate_ug": 8.0,
    "iron_mg": 0.32,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 21.0,
    "potassium_mg": 185.0,
    "protein_g": 0.81,
    "salt_g": 0.0125,
    "sat_fat_g": 0.02,
    "sodium_mg": 5.0,
    "sugar_g": 3.24,
    "vitamin_a_ug": 85.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.55,
    "vitamin_k_ug": 4.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710121",
  "state": "Unspecified",
  "subcategory": "Baby food: vegetables",
  "tags": [
    "baby-food-vegetables",
    "infant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
