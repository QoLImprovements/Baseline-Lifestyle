/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "package-yield-5-5-oz",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170450",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 822.0,
      "key": "package-yield-5-5-oz",
      "kind": "unit",
      "label": "package yield, 5.5 oz"
    },
    {
      "gramsPerUnit": 137.0,
      "key": "0-16-package-5-5-oz-yields",
      "kind": "unit",
      "label": "0.16 package (5.5 oz) yields"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "cup-unprepared",
      "kind": "unit",
      "label": "cup (unprepared)"
    }
  ],
  "name": "Potatoes, scalloped, dry mix, prepared with water, whole milk and butter",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 12.8,
    "energy_kcal": 389.0,
    "fat_g": 4.3,
    "fibre_g": 1.1,
    "folate_ug": 10.0,
    "iron_mg": 0.38,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 56.0,
    "potassium_mg": 203.0,
    "protein_g": 2.12,
    "salt_g": 0.8525,
    "sat_fat_g": 2.63,
    "sodium_mg": 341.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 35.0,
    "vitamin_c_mg": 3.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170450",
  "state": "Unspecified",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "unspecified",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
