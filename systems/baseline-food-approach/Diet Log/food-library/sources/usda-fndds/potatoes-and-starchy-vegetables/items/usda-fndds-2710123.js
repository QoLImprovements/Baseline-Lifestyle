/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-pouch",
  "description": "Baby food: vegetables",
  "id": "usda-fndds-2710123",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
      "gramsPerUnit": 110.0,
      "key": "1-jar",
      "kind": "unit",
      "label": "1 jar"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    }
  ],
  "name": "Baby Toddler sweet potatoes, Stage 2",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 14.0,
    "energy_kcal": 60.0,
    "fat_g": 0.1,
    "fibre_g": 1.5,
    "folate_ug": 10.0,
    "iron_mg": 0.39,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 24.0,
    "potassium_mg": 243.0,
    "protein_g": 1.1,
    "salt_g": 0.045,
    "sat_fat_g": 0.021,
    "sodium_mg": 18.0,
    "sugar_g": 4.24,
    "vitamin_a_ug": 332.0,
    "vitamin_c_mg": 9.6,
    "vitamin_e_mg": 0.52,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710123",
  "state": "Unspecified",
  "subcategory": "Baby food: vegetables",
  "tags": [
    "baby-food-vegetables",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
