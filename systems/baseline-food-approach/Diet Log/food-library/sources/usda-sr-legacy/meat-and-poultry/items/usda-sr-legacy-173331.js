/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "pie",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-173331",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 302.0,
      "key": "pie",
      "kind": "unit",
      "label": "pie"
    }
  ],
  "name": "Chicken pot pie, frozen entree, prepared",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 19.2,
    "energy_kcal": 204.0,
    "fat_g": 11.8,
    "fibre_g": 1.1,
    "folate_ug": 35.0,
    "iron_mg": 0.76,
    "magnesium_mg": 11.0,
    "omega3_g": 0.243,
    "phosphorus_mg": 72.0,
    "potassium_mg": 110.0,
    "protein_g": 5.11,
    "salt_g": 0.9825,
    "sat_fat_g": 4.36,
    "sodium_mg": 393.0,
    "sugar_g": 2.26,
    "vitamin_a_ug": 34.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.53,
    "vitamin_k_ug": 10.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173331",
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
