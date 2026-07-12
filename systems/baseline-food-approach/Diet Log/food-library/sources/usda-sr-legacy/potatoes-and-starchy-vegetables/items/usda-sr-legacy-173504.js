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
  "id": "usda-sr-legacy-173504",
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
  "name": "Babyfood, vegetable, green beans and potatoes",
  "nutritionPerBasis": {
    "calcium_mg": 60.0,
    "carbs_g": 9.0,
    "energy_kcal": 259.0,
    "fat_g": 1.9,
    "fibre_g": 1.4,
    "folate_ug": 10.0,
    "iron_mg": 0.5,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 61.0,
    "potassium_mg": 148.0,
    "protein_g": 2.2,
    "salt_g": 0.045,
    "sat_fat_g": 1.12,
    "sodium_mg": 18.0,
    "sugar_g": 2.35,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173504",
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
