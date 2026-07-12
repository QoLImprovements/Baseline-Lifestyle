/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "package-10-oz",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169968",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 284.0,
      "key": "package-10-oz",
      "kind": "unit",
      "label": "package (10 oz)"
    },
    {
      "gramsPerUnit": 156.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Broccoli, frozen, chopped, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 56.0,
    "carbs_g": 4.78,
    "energy_kcal": 110.0,
    "fat_g": 0.29,
    "fibre_g": 3.0,
    "folate_ug": 67.0,
    "iron_mg": 0.81,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 50.0,
    "potassium_mg": 212.0,
    "protein_g": 2.81,
    "salt_g": 0.06,
    "sat_fat_g": 0.044,
    "sodium_mg": 24.0,
    "sugar_g": 1.35,
    "vitamin_a_ug": 52.0,
    "vitamin_c_mg": 56.4,
    "vitamin_e_mg": 1.22,
    "vitamin_k_ug": 81.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169968",
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
