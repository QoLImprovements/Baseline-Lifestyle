/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Eggs and omelets",
  "id": "usda-fndds-2707290",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 82.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 41.0,
      "key": "1-egg-white",
      "kind": "unit",
      "label": "1 egg white"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Egg white, omelet, scrambled, or fried, with cheese",
  "nutritionPerBasis": {
    "calcium_mg": 117.0,
    "carbs_g": 2.56,
    "energy_kcal": 132.0,
    "fat_g": 8.51,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.12,
    "magnesium_mg": 13.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 84.0,
    "potassium_mg": 153.0,
    "protein_g": 11.3,
    "salt_g": 0.9275,
    "sat_fat_g": 3.32,
    "sodium_mg": 371.0,
    "sugar_g": 0.93,
    "vitamin_a_ug": 55.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.84,
    "vitamin_k_ug": 4.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707290",
  "state": "Fried",
  "subcategory": "Eggs and omelets",
  "tags": [
    "eggs-and-omelets",
    "fried",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
