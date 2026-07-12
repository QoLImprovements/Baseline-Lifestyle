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
  "id": "usda-sr-legacy-169609",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 22.0,
      "key": "portion-amount-to-make-1-2-cup",
      "kind": "unit",
      "label": "portion, amount to make 1/2 cup"
    },
    {
      "gramsPerUnit": 88.0,
      "key": "package-3-12-oz",
      "kind": "unit",
      "label": "package (3.12 oz)"
    }
  ],
  "name": "Puddings, vanilla, dry mix, regular",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 93.5,
    "energy_kcal": 379.0,
    "fat_g": 0.4,
    "fibre_g": 0.6,
    "folate_ug": 0.0,
    "iron_mg": 0.08,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 2.0,
    "potassium_mg": 20.0,
    "protein_g": 0.3,
    "salt_g": 1.5325,
    "sat_fat_g": 0.09,
    "sodium_mg": 613.0,
    "sugar_g": 79.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169609",
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
