/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "1-tablespoon",
  "description": "Baby food: vegetables",
  "id": "usda-fndds-2710127",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-pouch",
      "kind": "unit",
      "label": "1 pouch"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-tub",
      "kind": "unit",
      "label": "1 tub"
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
    }
  ],
  "name": "Baby Toddler multiple vegetables, Stage 2",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 9.56,
    "energy_kcal": 44.0,
    "fat_g": 0.25,
    "fibre_g": 1.6,
    "folate_ug": 18.0,
    "iron_mg": 0.48,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 29.0,
    "potassium_mg": 183.0,
    "protein_g": 1.44,
    "salt_g": 0.08,
    "sat_fat_g": 0.067,
    "sodium_mg": 32.0,
    "sugar_g": 2.92,
    "vitamin_a_ug": 234.0,
    "vitamin_c_mg": 5.8,
    "vitamin_e_mg": 0.38,
    "vitamin_k_ug": 16.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710127",
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
