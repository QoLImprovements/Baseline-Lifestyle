/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168544",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 284.0,
      "key": "package-10-oz",
      "kind": "unit",
      "label": "package (10 oz)"
    }
  ],
  "name": "Corn, sweet, white, frozen, kernels cut off cob, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 20.7,
    "energy_kcal": 88.0,
    "fat_g": 0.77,
    "fibre_g": 2.9,
    "folate_ug": 36.0,
    "iron_mg": 0.41,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 70.0,
    "potassium_mg": 213.0,
    "protein_g": 3.02,
    "salt_g": 0.0075,
    "sat_fat_g": 0.184,
    "sodium_mg": 3.0,
    "sugar_g": 9.09,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 6.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168544",
  "state": "Frozen",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "frozen",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
