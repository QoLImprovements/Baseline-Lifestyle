/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "packet",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168556",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "packet",
      "kind": "unit",
      "label": "packet"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Catsup",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 27.4,
    "energy_kcal": 423.0,
    "fat_g": 0.1,
    "fibre_g": 0.3,
    "folate_ug": 9.0,
    "iron_mg": 0.35,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 26.0,
    "potassium_mg": 281.0,
    "protein_g": 1.04,
    "salt_g": 2.2675,
    "sat_fat_g": 0.014,
    "sodium_mg": 907.0,
    "sugar_g": 21.3,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 4.1,
    "vitamin_e_mg": 1.46,
    "vitamin_k_ug": 3.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168556",
  "state": "Unspecified",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "unspecified",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
