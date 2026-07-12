/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "item",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-172083",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 355.0,
      "key": "item",
      "kind": "unit",
      "label": "item"
    }
  ],
  "name": "Fast Foods, cheeseburger; double, large patty; with condiments, vegetables and mayonnaise",
  "nutritionPerBasis": {
    "calcium_mg": 68.0,
    "carbs_g": 12.6,
    "energy_kcal": 253.0,
    "fat_g": 15.6,
    "fibre_g": 1.3,
    "folate_ug": 27.0,
    "iron_mg": 4.12,
    "magnesium_mg": 19.0,
    "omega3_g": 0.392,
    "phosphorus_mg": 131.0,
    "potassium_mg": 202.0,
    "protein_g": 15.5,
    "salt_g": 1.0125,
    "sat_fat_g": 6.52,
    "sodium_mg": 405.0,
    "sugar_g": 3.61,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 9.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172083",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "condiments-and-sauces",
    "fast-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
