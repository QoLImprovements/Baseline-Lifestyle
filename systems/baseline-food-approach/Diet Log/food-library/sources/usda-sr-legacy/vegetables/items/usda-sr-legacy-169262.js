/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "0-33-package-10-oz",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169262",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "0-33-package-10-oz",
      "kind": "unit",
      "label": "0.33 package (10 oz)"
    },
    {
      "gramsPerUnit": 1361.0,
      "key": "package-3-lb",
      "kind": "unit",
      "label": "package (3 lb)"
    },
    {
      "gramsPerUnit": 284.0,
      "key": "package-10-oz",
      "kind": "unit",
      "label": "package (10 oz)"
    }
  ],
  "name": "Okra, frozen, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 81.0,
    "carbs_g": 6.63,
    "energy_kcal": 125.0,
    "fat_g": 0.25,
    "fibre_g": 2.2,
    "folate_ug": 148.0,
    "iron_mg": 0.57,
    "magnesium_mg": 43.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 42.0,
    "potassium_mg": 211.0,
    "protein_g": 1.69,
    "salt_g": 0.0075,
    "sat_fat_g": 0.065,
    "sodium_mg": 3.0,
    "sugar_g": 2.97,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 12.4,
    "vitamin_e_mg": 0.33,
    "vitamin_k_ug": 49.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169262",
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
