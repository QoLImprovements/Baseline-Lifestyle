/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-meal-12-5-oz",
  "description": "Pasta mixed dishes, excludes macaroni and cheese",
  "id": "usda-fndds-2709141",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 354.0,
      "key": "1-meal-12-5-oz",
      "kind": "unit",
      "label": "1 meal (12.5 oz)"
    },
    {
      "gramsPerUnit": 354.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Spaghetti and meatballs dinner, NFS, frozen meal",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 15.1,
    "energy_kcal": 113.0,
    "fat_g": 3.39,
    "fibre_g": 1.5,
    "folate_ug": 36.0,
    "iron_mg": 0.93,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 65.0,
    "potassium_mg": 179.0,
    "protein_g": 5.58,
    "salt_g": 0.7375,
    "sat_fat_g": 1.01,
    "sodium_mg": 295.0,
    "sugar_g": 2.88,
    "vitamin_a_ug": 40.0,
    "vitamin_c_mg": 6.7,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 6.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709141",
  "state": "Frozen",
  "subcategory": "Pasta mixed dishes, excludes macaroni and cheese",
  "tags": [
    "frozen",
    "milk-dairy-and-eggs",
    "pasta-mixed-dishes-excludes-macaroni-and-cheese"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
