/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "piece-turnover-1-serving",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-169780",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 127.0,
      "key": "piece-turnover-1-serving",
      "kind": "unit",
      "label": "piece turnover 1 serving"
    }
  ],
  "name": "Turnover, chicken- or turkey-, and vegetable-filled, reduced fat, frozen",
  "nutritionPerBasis": {
    "calcium_mg": 157.0,
    "carbs_g": 21.7,
    "energy_kcal": 703.0,
    "fat_g": 5.51,
    "fibre_g": 3.1,
    "folate_ug": 48.0,
    "iron_mg": 2.13,
    "magnesium_mg": 31.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 161.0,
    "potassium_mg": 167.0,
    "protein_g": 7.87,
    "salt_g": 0.69,
    "sat_fat_g": 2.76,
    "sodium_mg": 276.0,
    "sugar_g": 3.94,
    "vitamin_a_ug": 40.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.43,
    "vitamin_k_ug": 13.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169780",
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
