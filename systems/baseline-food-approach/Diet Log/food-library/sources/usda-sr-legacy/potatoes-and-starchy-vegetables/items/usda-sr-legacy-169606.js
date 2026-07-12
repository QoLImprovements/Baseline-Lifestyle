/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "package-3-5-oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-169606",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 92.0,
      "key": "package-3-5-oz",
      "kind": "unit",
      "label": "package (3.5 oz)"
    },
    {
      "gramsPerUnit": 23.0,
      "key": "portion-amount-to-make-1-2-cup",
      "kind": "unit",
      "label": "portion, amount to make 1/2 cup"
    }
  ],
  "name": "Puddings, tapioca, dry mix",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 94.3,
    "energy_kcal": 1540.0,
    "fat_g": 0.1,
    "fibre_g": 0.2,
    "folate_ug": 0.0,
    "iron_mg": 0.12,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 4.0,
    "potassium_mg": 5.0,
    "protein_g": 0.1,
    "salt_g": 1.1925,
    "sat_fat_g": 0.0,
    "sodium_mg": 477.0,
    "sugar_g": 65.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169606",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "sweets",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
