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
  "id": "usda-sr-legacy-172092",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 397.0,
      "key": "package-yields",
      "kind": "unit",
      "label": "package yields"
    },
    {
      "gramsPerUnit": 397.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Turkey Pot Pie, frozen entree",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 17.7,
    "energy_kcal": 736.0,
    "fat_g": 8.8,
    "fibre_g": 1.1,
    "folate_ug": 0.0,
    "iron_mg": 1.0,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 6.5,
    "salt_g": 0.875,
    "sat_fat_g": 2.88,
    "sodium_mg": 350.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1770.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172092",
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
