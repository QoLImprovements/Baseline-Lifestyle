/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "package-yields",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-173327",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 256.0,
      "key": "package-yields",
      "kind": "unit",
      "label": "package yields"
    },
    {
      "gramsPerUnit": 127.0,
      "key": "serving-1-hot-pocket",
      "kind": "unit",
      "label": "serving (1 hot pocket)"
    }
  ],
  "name": "HOT POCKETS Ham 'N Cheese Stuffed Sandwich, frozen",
  "nutritionPerBasis": {
    "calcium_mg": 152.0,
    "carbs_g": 24.7,
    "energy_kcal": 1130.0,
    "fat_g": 15.0,
    "fibre_g": 1.5,
    "folate_ug": 54.0,
    "iron_mg": 2.0,
    "magnesium_mg": 18.0,
    "omega3_g": 0.175,
    "phosphorus_mg": 168.0,
    "potassium_mg": 188.0,
    "protein_g": 9.16,
    "salt_g": 0.965,
    "sat_fat_g": 3.54,
    "sodium_mg": 386.0,
    "sugar_g": 7.6,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173327",
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
