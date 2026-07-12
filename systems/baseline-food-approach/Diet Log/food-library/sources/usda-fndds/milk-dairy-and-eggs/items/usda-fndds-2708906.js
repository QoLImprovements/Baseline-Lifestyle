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
  "id": "usda-fndds-2708906",
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
  "name": "Pasta, whole grain, with cream sauce, and added vegetables, restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 15.6,
    "energy_kcal": 187.0,
    "fat_g": 12.8,
    "fibre_g": 2.0,
    "folate_ug": 14.0,
    "iron_mg": 0.88,
    "magnesium_mg": 29.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 84.0,
    "potassium_mg": 92.0,
    "protein_g": 3.79,
    "salt_g": 1.3025,
    "sat_fat_g": 3.93,
    "sodium_mg": 521.0,
    "sugar_g": 1.0,
    "vitamin_a_ug": 50.0,
    "vitamin_c_mg": 4.7,
    "vitamin_e_mg": 1.56,
    "vitamin_k_ug": 8.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708906",
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
