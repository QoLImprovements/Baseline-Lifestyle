/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "carrot",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170394",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 46.0,
      "key": "carrot",
      "kind": "unit",
      "label": "carrot"
    },
    {
      "gramsPerUnit": 9.7,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 78.0,
      "key": "0-5-cup-slices",
      "kind": "unit",
      "label": "0.5 cup slices"
    }
  ],
  "name": "Carrots, cooked, boiled, drained, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 8.22,
    "energy_kcal": 147.0,
    "fat_g": 0.18,
    "fibre_g": 3.0,
    "folate_ug": 14.0,
    "iron_mg": 0.34,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 30.0,
    "potassium_mg": 235.0,
    "protein_g": 0.76,
    "salt_g": 0.145,
    "sat_fat_g": 0.03,
    "sodium_mg": 58.0,
    "sugar_g": 3.45,
    "vitamin_a_ug": 852.0,
    "vitamin_c_mg": 3.6,
    "vitamin_e_mg": 1.03,
    "vitamin_k_ug": 13.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170394",
  "state": "Boiled",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "boiled",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
