/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "1-jar",
  "description": "Baby food: vegetables",
  "id": "usda-fndds-2710125",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-jar",
      "kind": "unit",
      "label": "1 jar"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-pouch",
      "kind": "unit",
      "label": "1 pouch"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
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
    }
  ],
  "name": "Baby Toddler green beans, Stage 2",
  "nutritionPerBasis": {
    "calcium_mg": 65.0,
    "carbs_g": 5.8,
    "energy_kcal": 24.0,
    "fat_g": 0.1,
    "fibre_g": 1.9,
    "folate_ug": 33.0,
    "iron_mg": 1.08,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 19.0,
    "potassium_mg": 128.0,
    "protein_g": 1.2,
    "salt_g": 0.0125,
    "sat_fat_g": 0.023,
    "sodium_mg": 5.0,
    "sugar_g": 1.08,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 8.4,
    "vitamin_e_mg": 0.32,
    "vitamin_k_ug": 11.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710125",
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
