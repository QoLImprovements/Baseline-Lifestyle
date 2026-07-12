/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2707111",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 258.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 258.0,
      "key": "1-entree-9-1-oz",
      "kind": "unit",
      "label": "1 entree (9.1 oz)"
    }
  ],
  "name": "Chicken and vegetables au gratin with rice, diet frozen entree",
  "nutritionPerBasis": {
    "calcium_mg": 95.0,
    "carbs_g": 7.24,
    "energy_kcal": 120.0,
    "fat_g": 5.41,
    "fibre_g": 0.8,
    "folate_ug": 31.0,
    "iron_mg": 0.57,
    "magnesium_mg": 29.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 136.0,
    "potassium_mg": 213.0,
    "protein_g": 10.7,
    "salt_g": 1.2475,
    "sat_fat_g": 2.78,
    "sodium_mg": 499.0,
    "sugar_g": 0.88,
    "vitamin_a_ug": 90.0,
    "vitamin_c_mg": 6.9,
    "vitamin_e_mg": 0.52,
    "vitamin_k_ug": 82.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707111",
  "state": "Frozen",
  "subcategory": "Poultry mixed dishes",
  "tags": [
    "frozen",
    "meat-and-poultry",
    "poultry-mixed-dishes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
