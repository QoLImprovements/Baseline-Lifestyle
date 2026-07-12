/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Pasta mixed dishes, excludes macaroni and cheese",
  "id": "usda-fndds-2708946",
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
  "name": "Macaroni or pasta salad with chicken",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 20.9,
    "energy_kcal": 213.0,
    "fat_g": 10.8,
    "fibre_g": 1.2,
    "folate_ug": 49.0,
    "iron_mg": 0.97,
    "magnesium_mg": 16.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 76.0,
    "potassium_mg": 84.0,
    "protein_g": 7.82,
    "salt_g": 0.5625,
    "sat_fat_g": 1.79,
    "sodium_mg": 225.0,
    "sugar_g": 1.57,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 1.5,
    "vitamin_e_mg": 0.53,
    "vitamin_k_ug": 23.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708946",
  "state": "Unspecified",
  "subcategory": "Pasta mixed dishes, excludes macaroni and cheese",
  "tags": [
    "meat-and-poultry",
    "pasta-mixed-dishes-excludes-macaroni-and-cheese",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
