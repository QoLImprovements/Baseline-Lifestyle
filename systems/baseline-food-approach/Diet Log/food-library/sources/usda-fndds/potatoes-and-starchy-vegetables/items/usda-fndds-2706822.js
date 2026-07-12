/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2706822",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 223.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 223.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chicken or turkey fricassee, with sauce, no potatoes, potatoes reported separately, Puerto Rican style",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 2.54,
    "energy_kcal": 183.0,
    "fat_g": 13.1,
    "fibre_g": 0.7,
    "folate_ug": 9.0,
    "iron_mg": 0.71,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 129.0,
    "potassium_mg": 219.0,
    "protein_g": 14.0,
    "salt_g": 1.4825,
    "sat_fat_g": 2.36,
    "sodium_mg": 593.0,
    "sugar_g": 1.19,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 10.1,
    "vitamin_e_mg": 2.53,
    "vitamin_k_ug": 6.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706822",
  "state": "Unspecified",
  "subcategory": "Poultry mixed dishes",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "poultry-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
