/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "package-3-5-oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-169648",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 99.0,
      "key": "package-3-5-oz",
      "kind": "unit",
      "label": "package (3.5 oz)"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "portion-amount-to-make-1-2-cup",
      "kind": "unit",
      "label": "portion, amount to make 1/2 cup"
    }
  ],
  "name": "Puddings, banana, dry mix, instant",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 92.7,
    "energy_kcal": 1540.0,
    "fat_g": 0.6,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.12,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 804.0,
    "potassium_mg": 15.0,
    "protein_g": 0.0,
    "salt_g": 3.75,
    "sat_fat_g": 0.09,
    "sodium_mg": 1500.0,
    "sugar_g": 76.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169648",
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
