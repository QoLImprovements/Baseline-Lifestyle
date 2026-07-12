/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "6-rings",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170414",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "6-rings",
      "kind": "unit",
      "label": "6 rings"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "package-9-oz",
      "kind": "unit",
      "label": "package (9 oz)"
    },
    {
      "gramsPerUnit": 454.0,
      "key": "package-16-oz",
      "kind": "unit",
      "label": "package (16 oz)"
    }
  ],
  "name": "Onion rings, breaded, par fried, frozen, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 30.5,
    "energy_kcal": 1080.0,
    "fat_g": 14.1,
    "fibre_g": 1.8,
    "folate_ug": 48.0,
    "iron_mg": 0.93,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 49.0,
    "potassium_mg": 190.0,
    "protein_g": 3.15,
    "salt_g": 0.615,
    "sat_fat_g": 4.53,
    "sodium_mg": 246.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 4.6,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170414",
  "state": "Fried",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "fried",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
