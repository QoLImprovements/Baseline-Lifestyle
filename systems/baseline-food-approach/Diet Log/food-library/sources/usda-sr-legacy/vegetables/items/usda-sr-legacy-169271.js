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
  "id": "usda-sr-legacy-169271",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 134.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Pumpkin flowers, cooked, boiled, drained, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 3.3,
    "energy_kcal": 63.0,
    "fat_g": 0.08,
    "fibre_g": 0.9,
    "folate_ug": 41.0,
    "iron_mg": 0.88,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 34.0,
    "potassium_mg": 106.0,
    "protein_g": 1.09,
    "salt_g": 0.015,
    "sat_fat_g": 0.041,
    "sodium_mg": 6.0,
    "sugar_g": 2.4,
    "vitamin_a_ug": 87.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169271",
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
