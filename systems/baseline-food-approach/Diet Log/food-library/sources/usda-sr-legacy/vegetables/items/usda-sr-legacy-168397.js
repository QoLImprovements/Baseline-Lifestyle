/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "can-drained-rinsed",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168397",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 266.0,
      "key": "can-drained-rinsed",
      "kind": "unit",
      "label": "can drained, rinsed"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "cup-drained-rinsed",
      "kind": "unit",
      "label": "cup drained, rinsed"
    }
  ],
  "name": "Corn, sweet, yellow, canned, drained solids, rinsed with tap water",
  "nutritionPerBasis": {
    "calcium_mg": 2.0,
    "carbs_g": 13.0,
    "energy_kcal": 64.0,
    "fat_g": 1.43,
    "fibre_g": 1.7,
    "folate_ug": 29.0,
    "iron_mg": 0.22,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 41.0,
    "potassium_mg": 116.0,
    "protein_g": 2.18,
    "salt_g": 0.4075,
    "sat_fat_g": 0.219,
    "sodium_mg": 163.0,
    "sugar_g": 4.11,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.7,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168397",
  "state": "Canned",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "canned",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
