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
  "id": "usda-sr-legacy-170448",
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
    }
  ],
  "name": "Potatoes, au gratin, dry mix, prepared with water, whole milk and butter",
  "nutritionPerBasis": {
    "calcium_mg": 83.0,
    "carbs_g": 12.8,
    "energy_kcal": 389.0,
    "fat_g": 4.12,
    "fibre_g": 0.9,
    "folate_ug": 7.0,
    "iron_mg": 0.32,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 95.0,
    "potassium_mg": 219.0,
    "protein_g": 2.3,
    "salt_g": 1.0975,
    "sat_fat_g": 2.59,
    "sodium_mg": 439.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 52.0,
    "vitamin_c_mg": 3.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170448",
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
