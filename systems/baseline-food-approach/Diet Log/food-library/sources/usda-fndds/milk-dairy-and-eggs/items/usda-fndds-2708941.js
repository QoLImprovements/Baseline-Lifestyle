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
  "id": "usda-fndds-2708941",
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
  "name": "Macaroni or pasta salad with egg",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 22.5,
    "energy_kcal": 215.0,
    "fat_g": 11.4,
    "fibre_g": 1.3,
    "folate_ug": 55.0,
    "iron_mg": 1.03,
    "magnesium_mg": 14.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 59.0,
    "potassium_mg": 56.0,
    "protein_g": 5.18,
    "salt_g": 0.4925,
    "sat_fat_g": 1.95,
    "sodium_mg": 197.0,
    "sugar_g": 1.79,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 1.6,
    "vitamin_e_mg": 0.6,
    "vitamin_k_ug": 25.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708941",
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
