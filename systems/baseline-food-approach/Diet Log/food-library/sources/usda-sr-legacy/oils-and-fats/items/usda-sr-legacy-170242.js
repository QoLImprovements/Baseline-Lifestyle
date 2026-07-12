/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "package-3-oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-170242",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "package-3-oz",
      "kind": "unit",
      "label": "package (3 oz)"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "portion-amount-to-make-1-2-cup",
      "kind": "unit",
      "label": "portion, amount to make 1/2 cup"
    }
  ],
  "name": "Puddings, lemon, dry mix, regular, with added oil, potassium, sodium",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 90.3,
    "energy_kcal": 1530.0,
    "fat_g": 1.5,
    "fibre_g": 0.1,
    "folate_ug": 0.0,
    "iron_mg": 0.17,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 3.0,
    "potassium_mg": 257.0,
    "protein_g": 0.1,
    "salt_g": 2.1225,
    "sat_fat_g": 0.27,
    "sodium_mg": 849.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170242",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "oils-and-fats",
    "sweets",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
