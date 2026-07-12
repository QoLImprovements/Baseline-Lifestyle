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
  "id": "usda-fndds-2708934",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 136.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 204.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Macaroni or pasta salad, made with mayonnaise-type salad dressing",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 26.6,
    "energy_kcal": 160.0,
    "fat_g": 4.01,
    "fibre_g": 1.4,
    "folate_ug": 56.0,
    "iron_mg": 0.99,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 46.0,
    "potassium_mg": 51.0,
    "protein_g": 4.38,
    "salt_g": 0.5275,
    "sat_fat_g": 0.652,
    "sodium_mg": 211.0,
    "sugar_g": 3.28,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 1.8,
    "vitamin_e_mg": 0.32,
    "vitamin_k_ug": 10.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708934",
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
