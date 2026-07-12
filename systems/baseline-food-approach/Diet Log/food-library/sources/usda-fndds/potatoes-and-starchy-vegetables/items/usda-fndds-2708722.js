/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Pasta mixed dishes, excludes macaroni and cheese",
  "id": "usda-fndds-2708722",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 188.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 26.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 188.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Gnocchi, potato",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 17.2,
    "energy_kcal": 135.0,
    "fat_g": 6.33,
    "fibre_g": 1.0,
    "folate_ug": 17.0,
    "iron_mg": 0.83,
    "magnesium_mg": 12.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 41.0,
    "potassium_mg": 139.0,
    "protein_g": 2.44,
    "salt_g": 0.6975,
    "sat_fat_g": 3.42,
    "sodium_mg": 279.0,
    "sugar_g": 0.99,
    "vitamin_a_ug": 62.0,
    "vitamin_c_mg": 1.9,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708722",
  "state": "Unspecified",
  "subcategory": "Pasta mixed dishes, excludes macaroni and cheese",
  "tags": [
    "pasta-mixed-dishes-excludes-macaroni-and-cheese",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
