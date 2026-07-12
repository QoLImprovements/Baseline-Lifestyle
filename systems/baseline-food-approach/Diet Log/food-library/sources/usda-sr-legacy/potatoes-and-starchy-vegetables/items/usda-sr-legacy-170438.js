/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "0-5-cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170438",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 78.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    },
    {
      "gramsPerUnit": 136.0,
      "key": "potato-2-1-2-dia-sphere",
      "kind": "unit",
      "label": "potato (2-1/2\" dia, sphere)"
    }
  ],
  "name": "Potatoes, boiled, cooked in skin, flesh, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 20.1,
    "energy_kcal": 87.0,
    "fat_g": 0.1,
    "fibre_g": 1.8,
    "folate_ug": 10.0,
    "iron_mg": 0.31,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 44.0,
    "potassium_mg": 379.0,
    "protein_g": 1.87,
    "salt_g": 0.01,
    "sat_fat_g": 0.026,
    "sodium_mg": 4.0,
    "sugar_g": 0.91,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 13.0,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 2.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170438",
  "state": "Boiled",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "boiled",
    "potatoes-and-starchy-vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
