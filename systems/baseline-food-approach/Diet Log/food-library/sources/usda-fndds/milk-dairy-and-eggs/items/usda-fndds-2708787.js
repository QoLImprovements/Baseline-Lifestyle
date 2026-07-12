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
  "id": "usda-fndds-2708787",
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
  "name": "Tortellini, cheese-filled, meatless, with tomato sauce",
  "nutritionPerBasis": {
    "calcium_mg": 72.0,
    "carbs_g": 23.0,
    "energy_kcal": 149.0,
    "fat_g": 3.65,
    "fibre_g": 1.6,
    "folate_ug": 27.0,
    "iron_mg": 0.82,
    "magnesium_mg": 16.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 90.0,
    "potassium_mg": 160.0,
    "protein_g": 6.18,
    "salt_g": 0.6975,
    "sat_fat_g": 1.55,
    "sodium_mg": 279.0,
    "sugar_g": 2.96,
    "vitamin_a_ug": 30.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 1.19,
    "vitamin_k_ug": 7.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708787",
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
