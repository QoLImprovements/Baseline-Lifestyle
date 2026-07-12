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
  "id": "usda-fndds-2708827",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Pasta with vegetables, no sauce or dressing",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 23.1,
    "energy_kcal": 144.0,
    "fat_g": 3.54,
    "fibre_g": 2.3,
    "folate_ug": 56.0,
    "iron_mg": 1.04,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 54.0,
    "potassium_mg": 102.0,
    "protein_g": 4.46,
    "salt_g": 0.37,
    "sat_fat_g": 0.508,
    "sodium_mg": 148.0,
    "sugar_g": 1.24,
    "vitamin_a_ug": 107.0,
    "vitamin_c_mg": 8.2,
    "vitamin_e_mg": 0.74,
    "vitamin_k_ug": 17.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708827",
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
