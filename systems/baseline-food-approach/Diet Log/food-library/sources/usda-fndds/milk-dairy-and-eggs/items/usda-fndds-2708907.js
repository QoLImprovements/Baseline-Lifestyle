/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Pasta mixed dishes, excludes macaroni and cheese",
  "id": "usda-fndds-2708907",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Pasta, whole grain, with cream sauce, and added vegetables, home recipe",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 16.9,
    "energy_kcal": 136.0,
    "fat_g": 6.44,
    "fibre_g": 2.2,
    "folate_ug": 15.0,
    "iron_mg": 0.95,
    "magnesium_mg": 31.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 91.0,
    "potassium_mg": 99.0,
    "protein_g": 4.1,
    "salt_g": 0.515,
    "sat_fat_g": 3.27,
    "sodium_mg": 206.0,
    "sugar_g": 1.08,
    "vitamin_a_ug": 55.0,
    "vitamin_c_mg": 5.1,
    "vitamin_e_mg": 0.28,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708907",
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
