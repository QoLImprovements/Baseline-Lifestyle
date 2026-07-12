/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "portion-amount-to-make-1-2-cup",
  "description": "Sweets",
  "id": "usda-sr-legacy-169693",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 2.5,
      "key": "portion-amount-to-make-1-2-cup",
      "kind": "unit",
      "label": "portion, amount to make 1/2 cup"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "package-0-35-oz",
      "kind": "unit",
      "label": "package (0.35 oz)"
    }
  ],
  "name": "Gelatin desserts, dry mix, reduced calorie, with aspartame, no added sodium",
  "nutritionPerBasis": {
    "calcium_mg": 2.0,
    "carbs_g": 33.3,
    "energy_kcal": 1440.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 14.0,
    "iron_mg": 0.02,
    "magnesium_mg": 1.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 1290.0,
    "potassium_mg": 14.0,
    "protein_g": 55.3,
    "salt_g": 0.395,
    "sat_fat_g": 0.0,
    "sodium_mg": 158.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169693",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "sweets",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
