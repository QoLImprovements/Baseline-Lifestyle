/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "jar-gerber-4-oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-170952",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar-gerber-4-oz",
      "kind": "unit",
      "label": "jar, Gerber (4 oz)"
    }
  ],
  "name": "Babyfood, fruit and vegetable, apple and sweet potato",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 15.3,
    "energy_kcal": 64.0,
    "fat_g": 0.22,
    "fibre_g": 1.4,
    "folate_ug": 2.0,
    "iron_mg": 0.2,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 17.0,
    "potassium_mg": 149.0,
    "protein_g": 0.3,
    "salt_g": 0.0075,
    "sat_fat_g": 0.041,
    "sodium_mg": 3.0,
    "sugar_g": 11.6,
    "vitamin_a_ug": 103.0,
    "vitamin_c_mg": 6.4,
    "vitamin_e_mg": 0.16,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170952",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
