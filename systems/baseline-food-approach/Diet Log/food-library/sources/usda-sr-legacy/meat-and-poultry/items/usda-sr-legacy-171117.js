/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz-crumbled",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171117",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz-crumbled",
      "kind": "unit",
      "label": "3 oz crumbled"
    }
  ],
  "name": "Chicken, ground, crumbles, cooked, pan-browned",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 0.0,
    "energy_kcal": 790.0,
    "fat_g": 10.9,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.93,
    "magnesium_mg": 28.0,
    "omega3_g": 0.136,
    "phosphorus_mg": 234.0,
    "potassium_mg": 677.0,
    "protein_g": 23.3,
    "salt_g": 0.1875,
    "sat_fat_g": 3.11,
    "sodium_mg": 75.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171117",
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
