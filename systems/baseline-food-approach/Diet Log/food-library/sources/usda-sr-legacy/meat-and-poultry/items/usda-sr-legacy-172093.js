/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "pie-cooked-average-weight",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-172093",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 268.0,
      "key": "pie-cooked-average-weight",
      "kind": "unit",
      "label": "pie, cooked (average weight)"
    }
  ],
  "name": "Beef Pot Pie, frozen entree, prepared",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 22.0,
    "energy_kcal": 919.0,
    "fat_g": 11.4,
    "fibre_g": 0.8,
    "folate_ug": 18.0,
    "iron_mg": 1.25,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 67.0,
    "potassium_mg": 115.0,
    "protein_g": 7.25,
    "salt_g": 0.9125,
    "sat_fat_g": 4.15,
    "sodium_mg": 365.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 2.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172093",
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
