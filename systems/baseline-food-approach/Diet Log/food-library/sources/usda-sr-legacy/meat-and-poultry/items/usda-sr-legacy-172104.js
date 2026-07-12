/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "oz",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-172104",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "roll",
      "kind": "unit",
      "label": "roll"
    }
  ],
  "name": "Egg rolls, chicken, refrigerated, heated",
  "nutritionPerBasis": {
    "calcium_mg": 47.0,
    "carbs_g": 28.5,
    "energy_kcal": 822.0,
    "fat_g": 4.51,
    "fibre_g": 2.4,
    "folate_ug": 63.0,
    "iron_mg": 1.69,
    "magnesium_mg": 30.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 118.0,
    "potassium_mg": 281.0,
    "protein_g": 10.4,
    "salt_g": 1.195,
    "sat_fat_g": 0.964,
    "sodium_mg": 478.0,
    "sugar_g": 5.57,
    "vitamin_a_ug": 55.0,
    "vitamin_c_mg": 11.2,
    "vitamin_e_mg": 0.37,
    "vitamin_k_ug": 23.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172104",
  "state": "Unspecified",
  "subcategory": "Meals, Entrees, and Side Dishes",
  "tags": [
    "meals-entrees-and-side-dishes",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
