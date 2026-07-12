/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "serving",
  "description": "Snacks",
  "id": "usda-sr-legacy-174806",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Snacks, Pretzels, gluten- free made with cornstarch and potato flour",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 78.6,
    "energy_kcal": 389.0,
    "fat_g": 6.67,
    "fibre_g": 3.3,
    "folate_ug": 2.0,
    "iron_mg": 0.46,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 21.0,
    "potassium_mg": 69.0,
    "protein_g": 3.52,
    "salt_g": 3.925,
    "sat_fat_g": 3.31,
    "sodium_mg": 1570.0,
    "sugar_g": 4.22,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 1.07,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174806",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
