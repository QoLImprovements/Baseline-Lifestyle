/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-174503",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Chicken, skin (drumsticks and thighs), with added solution, cooked, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 0.44,
    "energy_kcal": 1760.0,
    "fat_g": 37.6,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 1.17,
    "magnesium_mg": 18.0,
    "omega3_g": 0.5,
    "phosphorus_mg": 176.0,
    "potassium_mg": 198.0,
    "protein_g": 20.3,
    "salt_g": 0.405,
    "sat_fat_g": 11.0,
    "sodium_mg": 162.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 53.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.45,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174503",
  "state": "Roasted",
  "subcategory": "Poultry Products",
  "tags": [
    "meat-and-poultry",
    "poultry-products",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
