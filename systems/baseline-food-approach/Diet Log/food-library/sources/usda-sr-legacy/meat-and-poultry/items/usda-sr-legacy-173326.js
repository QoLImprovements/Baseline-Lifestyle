/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "serving-1-hot-pocket",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-173326",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 127.0,
      "key": "serving-1-hot-pocket",
      "kind": "unit",
      "label": "serving (1 hot pocket)"
    }
  ],
  "name": "HOT POCKETS, CROISSANT POCKETS Chicken, Broccoli, and Cheddar Stuffed Sandwich, frozen",
  "nutritionPerBasis": {
    "calcium_mg": 152.0,
    "carbs_g": 30.4,
    "energy_kcal": 983.0,
    "fat_g": 8.6,
    "fibre_g": 1.1,
    "folate_ug": 54.0,
    "iron_mg": 2.97,
    "magnesium_mg": 18.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 168.0,
    "potassium_mg": 188.0,
    "protein_g": 8.9,
    "salt_g": 0.865,
    "sat_fat_g": 2.62,
    "sodium_mg": 346.0,
    "sugar_g": 7.6,
    "vitamin_a_ug": 58.0,
    "vitamin_c_mg": 4.9,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173326",
  "state": "Frozen",
  "subcategory": "Meals, Entrees, and Side Dishes",
  "tags": [
    "frozen",
    "meals-entrees-and-side-dishes",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
