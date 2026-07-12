/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup",
  "description": "Pasta mixed dishes, excludes macaroni and cheese",
  "id": "usda-fndds-2708883",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Pasta, whole grain, with tomato-based sauce and added vegetables, home recipe",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 19.2,
    "energy_kcal": 99.0,
    "fat_g": 1.47,
    "fibre_g": 2.9,
    "folate_ug": 19.0,
    "iron_mg": 1.22,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 85.0,
    "potassium_mg": 202.0,
    "protein_g": 3.84,
    "salt_g": 0.3925,
    "sat_fat_g": 0.196,
    "sodium_mg": 157.0,
    "sugar_g": 2.78,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 5.8,
    "vitamin_e_mg": 1.06,
    "vitamin_k_ug": 5.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708883",
  "state": "Unspecified",
  "subcategory": "Pasta mixed dishes, excludes macaroni and cheese",
  "tags": [
    "milk-dairy-and-eggs",
    "pasta-mixed-dishes-excludes-macaroni-and-cheese",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
