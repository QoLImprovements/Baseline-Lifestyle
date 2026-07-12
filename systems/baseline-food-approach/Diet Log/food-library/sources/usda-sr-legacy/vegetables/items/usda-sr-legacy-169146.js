/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "2-beets-2-dia-sphere",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169146",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "2-beets-2-dia-sphere",
      "kind": "unit",
      "label": "2 beets (2\" dia, sphere)"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "0-5-cup-slices",
      "kind": "unit",
      "label": "0.5 cup slices"
    }
  ],
  "name": "Beets, cooked, boiled, drained",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 9.96,
    "energy_kcal": 184.0,
    "fat_g": 0.18,
    "fibre_g": 2.0,
    "folate_ug": 80.0,
    "iron_mg": 0.79,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 38.0,
    "potassium_mg": 305.0,
    "protein_g": 1.68,
    "salt_g": 0.1925,
    "sat_fat_g": 0.028,
    "sodium_mg": 77.0,
    "sugar_g": 7.96,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 3.6,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169146",
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
