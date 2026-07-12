/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170047",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 91.0,
      "key": "10-pieces",
      "kind": "unit",
      "label": "10 pieces"
    }
  ],
  "name": "Potato puffs, frozen, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 24.8,
    "energy_kcal": 178.0,
    "fat_g": 8.71,
    "fibre_g": 2.3,
    "folate_ug": 17.0,
    "iron_mg": 0.47,
    "magnesium_mg": 16.0,
    "omega3_g": 0.219,
    "phosphorus_mg": 64.0,
    "potassium_mg": 247.0,
    "protein_g": 1.93,
    "salt_g": 1.07,
    "sat_fat_g": 1.42,
    "sodium_mg": 428.0,
    "sugar_g": 0.28,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 6.9,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 2.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170047",
  "state": "Frozen",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "frozen",
    "potatoes-and-starchy-vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
