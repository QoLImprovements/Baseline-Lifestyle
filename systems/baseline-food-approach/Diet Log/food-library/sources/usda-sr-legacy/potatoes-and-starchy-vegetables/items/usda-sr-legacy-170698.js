/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "serving-small",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170698",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "serving-small",
      "kind": "unit",
      "label": "serving small"
    },
    {
      "gramsPerUnit": 117.0,
      "key": "serving-medium",
      "kind": "unit",
      "label": "serving medium"
    },
    {
      "gramsPerUnit": 154.0,
      "key": "serving-large",
      "kind": "unit",
      "label": "serving large"
    }
  ],
  "name": "Fast foods, potato, french fried in vegetable oil",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 41.4,
    "energy_kcal": 1300.0,
    "fat_g": 14.7,
    "fibre_g": 3.8,
    "folate_ug": 30.0,
    "iron_mg": 0.81,
    "magnesium_mg": 35.0,
    "omega3_g": 0.407,
    "phosphorus_mg": 125.0,
    "potassium_mg": 579.0,
    "protein_g": 3.43,
    "salt_g": 0.525,
    "sat_fat_g": 2.34,
    "sodium_mg": 210.0,
    "sugar_g": 0.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 4.7,
    "vitamin_e_mg": 1.67,
    "vitamin_k_ug": 11.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170698",
  "state": "Fried",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "fried",
    "potatoes-and-starchy-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
