/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "package",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-172101",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 309.0,
      "key": "package",
      "kind": "unit",
      "label": "package"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Lasagna with meat & sauce, low-fat, frozen entree",
  "nutritionPerBasis": {
    "calcium_mg": 108.0,
    "carbs_g": 13.5,
    "energy_kcal": 424.0,
    "fat_g": 2.23,
    "fibre_g": 1.3,
    "folate_ug": 38.0,
    "iron_mg": 0.97,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 34.0,
    "potassium_mg": 150.0,
    "protein_g": 6.81,
    "salt_g": 0.4525,
    "sat_fat_g": 0.967,
    "sodium_mg": 181.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 17.9,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172101",
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
