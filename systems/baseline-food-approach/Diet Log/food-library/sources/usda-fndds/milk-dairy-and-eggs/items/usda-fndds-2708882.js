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
  "id": "usda-fndds-2708882",
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
  "name": "Pasta, whole grain, with tomato-based sauce and added vegetables, restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 17.8,
    "energy_kcal": 154.0,
    "fat_g": 8.22,
    "fibre_g": 2.6,
    "folate_ug": 18.0,
    "iron_mg": 1.14,
    "magnesium_mg": 34.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 79.0,
    "potassium_mg": 187.0,
    "protein_g": 3.56,
    "salt_g": 0.86,
    "sat_fat_g": 1.1,
    "sodium_mg": 344.0,
    "sugar_g": 2.57,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 5.4,
    "vitamin_e_mg": 2.28,
    "vitamin_k_ug": 12.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708882",
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
