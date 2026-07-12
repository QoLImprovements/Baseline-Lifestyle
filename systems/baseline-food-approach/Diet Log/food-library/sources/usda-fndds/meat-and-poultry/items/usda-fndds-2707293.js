/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-egg-white",
  "description": "Eggs and omelets",
  "id": "usda-fndds-2707293",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 51.0,
      "key": "1-egg-white",
      "kind": "unit",
      "label": "1 egg white"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 102.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Egg white, omelet, scrambled, or fried, with cheese and meat",
  "nutritionPerBasis": {
    "calcium_mg": 109.0,
    "carbs_g": 2.49,
    "energy_kcal": 141.0,
    "fat_g": 9.21,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.2,
    "magnesium_mg": 13.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 96.0,
    "potassium_mg": 169.0,
    "protein_g": 12.0,
    "salt_g": 1.0675,
    "sat_fat_g": 3.51,
    "sodium_mg": 427.0,
    "sugar_g": 0.93,
    "vitamin_a_ug": 52.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.82,
    "vitamin_k_ug": 4.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707293",
  "state": "Fried",
  "subcategory": "Eggs and omelets",
  "tags": [
    "eggs-and-omelets",
    "fried",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
