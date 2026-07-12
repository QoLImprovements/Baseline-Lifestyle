/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "0-5-cup-slices",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169983",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 64.0,
      "key": "0-5-cup-slices",
      "kind": "unit",
      "label": "0.5 cup slices"
    },
    {
      "gramsPerUnit": 284.0,
      "key": "package-10-oz",
      "kind": "unit",
      "label": "package (10 oz)"
    }
  ],
  "name": "Carrots, frozen, unprepared (Includes foods for USDA's Food Distribution Program)",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 7.9,
    "energy_kcal": 36.0,
    "fat_g": 0.46,
    "fibre_g": 3.3,
    "folate_ug": 10.0,
    "iron_mg": 0.44,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 33.0,
    "potassium_mg": 235.0,
    "protein_g": 0.78,
    "salt_g": 0.17,
    "sat_fat_g": 0.047,
    "sodium_mg": 68.0,
    "sugar_g": 4.76,
    "vitamin_a_ug": 710.0,
    "vitamin_c_mg": 2.5,
    "vitamin_e_mg": 0.57,
    "vitamin_k_ug": 17.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169983",
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
