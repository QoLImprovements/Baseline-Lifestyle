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
  "id": "usda-sr-legacy-172854",
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
    },
    {
      "gramsPerUnit": 453.0,
      "key": "lb",
      "kind": "unit",
      "label": "lb"
    }
  ],
  "name": "Chicken, skin (drumsticks and thighs), cooked, braised",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 0.0,
    "energy_kcal": 1860.0,
    "fat_g": 42.8,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 1.0,
    "magnesium_mg": 14.0,
    "omega3_g": 0.409,
    "phosphorus_mg": 130.0,
    "potassium_mg": 161.0,
    "protein_g": 14.6,
    "salt_g": 0.1875,
    "sat_fat_g": 11.9,
    "sodium_mg": 75.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 48.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172854",
  "state": "Cooked",
  "subcategory": "Poultry Products",
  "tags": [
    "cooked",
    "meat-and-poultry",
    "poultry-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
