/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706730",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 154.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 202.0,
      "key": "1-shishkabob",
      "kind": "unit",
      "label": "1 shishkabob"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Beef shish kabob with vegetables, excluding potatoes",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 5.06,
    "energy_kcal": 122.0,
    "fat_g": 4.88,
    "fibre_g": 0.8,
    "folate_ug": 17.0,
    "iron_mg": 1.31,
    "magnesium_mg": 16.0,
    "omega3_g": 0.008,
    "phosphorus_mg": 113.0,
    "potassium_mg": 238.0,
    "protein_g": 14.8,
    "salt_g": 0.52,
    "sat_fat_g": 1.66,
    "sodium_mg": 208.0,
    "sugar_g": 2.37,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 15.0,
    "vitamin_e_mg": 0.46,
    "vitamin_k_ug": 5.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706730",
  "state": "Unspecified",
  "subcategory": "Meat mixed dishes",
  "tags": [
    "meat-mixed-dishes",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
