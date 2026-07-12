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
  "id": "usda-fndds-2709370",
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
      "gramsPerUnit": 15.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-jar",
      "kind": "unit",
      "label": "1 jar"
    }
  ],
  "name": "Baby Toddler pears, Stage 2",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 11.6,
    "energy_kcal": 44.0,
    "fat_g": 0.1,
    "fibre_g": 2.8,
    "folate_ug": 4.0,
    "iron_mg": 0.25,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 12.0,
    "potassium_mg": 115.0,
    "protein_g": 0.3,
    "salt_g": 0.0025,
    "sat_fat_g": 0.006,
    "sodium_mg": 1.0,
    "sugar_g": 7.34,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 22.0,
    "vitamin_e_mg": 0.6,
    "vitamin_k_ug": 3.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709370",
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
