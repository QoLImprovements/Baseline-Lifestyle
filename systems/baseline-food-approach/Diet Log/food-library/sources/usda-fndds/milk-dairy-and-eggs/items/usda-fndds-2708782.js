/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-shell-jumbo",
  "description": "Pasta mixed dishes, excludes macaroni and cheese",
  "id": "usda-fndds-2708782",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-shell-jumbo",
      "kind": "unit",
      "label": "1 shell (jumbo)"
    },
    {
      "gramsPerUnit": 152.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 152.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Stuffed shells, cheese- and spinach- filled, no sauce",
  "nutritionPerBasis": {
    "calcium_mg": 154.0,
    "carbs_g": 22.4,
    "energy_kcal": 187.0,
    "fat_g": 6.63,
    "fibre_g": 1.0,
    "folate_ug": 56.0,
    "iron_mg": 1.95,
    "magnesium_mg": 35.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 157.0,
    "potassium_mg": 209.0,
    "protein_g": 9.56,
    "salt_g": 1.0975,
    "sat_fat_g": 3.26,
    "sodium_mg": 439.0,
    "sugar_g": 0.32,
    "vitamin_a_ug": 135.0,
    "vitamin_c_mg": 4.3,
    "vitamin_e_mg": 0.71,
    "vitamin_k_ug": 103.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708782",
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
