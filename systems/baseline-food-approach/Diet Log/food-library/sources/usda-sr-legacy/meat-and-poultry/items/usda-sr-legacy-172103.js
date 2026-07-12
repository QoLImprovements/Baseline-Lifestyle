/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "roll",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-172103",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "roll",
      "kind": "unit",
      "label": "roll"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Egg rolls, pork, refrigerated, heated",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 28.5,
    "energy_kcal": 951.0,
    "fat_g": 8.18,
    "fibre_g": 0.0,
    "folate_ug": 80.0,
    "iron_mg": 1.55,
    "magnesium_mg": 20.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 91.0,
    "potassium_mg": 212.0,
    "protein_g": 9.94,
    "salt_g": 1.0175,
    "sat_fat_g": 1.65,
    "sodium_mg": 407.0,
    "sugar_g": 1.67,
    "vitamin_a_ug": 390.0,
    "vitamin_c_mg": 29.3,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 22.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172103",
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
