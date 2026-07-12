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
  "id": "usda-fndds-2708947",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 204.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 136.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Macaroni or pasta salad with cheese",
  "nutritionPerBasis": {
    "calcium_mg": 98.0,
    "carbs_g": 21.8,
    "energy_kcal": 246.0,
    "fat_g": 14.4,
    "fibre_g": 1.3,
    "folate_ug": 52.0,
    "iron_mg": 0.9,
    "magnesium_mg": 16.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 100.0,
    "potassium_mg": 53.0,
    "protein_g": 6.89,
    "salt_g": 0.655,
    "sat_fat_g": 4.07,
    "sodium_mg": 262.0,
    "sugar_g": 1.66,
    "vitamin_a_ug": 45.0,
    "vitamin_c_mg": 1.6,
    "vitamin_e_mg": 0.58,
    "vitamin_k_ug": 24.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708947",
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
