/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "tbsp",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-168949",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 61.0,
      "key": "0-33-cup",
      "kind": "unit",
      "label": "0.33 cup"
    }
  ],
  "name": "Rice and vermicelli mix, beef flavor, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 76.0,
    "energy_kcal": 1500.0,
    "fat_g": 1.27,
    "fibre_g": 1.6,
    "folate_ug": 189.0,
    "iron_mg": 2.82,
    "magnesium_mg": 34.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 125.0,
    "potassium_mg": 169.0,
    "protein_g": 10.8,
    "salt_g": 3.35,
    "sat_fat_g": 0.31,
    "sodium_mg": 1340.0,
    "sugar_g": 4.27,
    "vitamin_a_ug": 70.0,
    "vitamin_c_mg": 1.9,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168949",
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
