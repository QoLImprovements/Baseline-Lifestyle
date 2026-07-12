/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-1-2-slices",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169211",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "cup-1-2-slices",
      "kind": "unit",
      "label": "cup (1/2\" slices)"
    },
    {
      "gramsPerUnit": 144.0,
      "key": "shoot",
      "kind": "unit",
      "label": "shoot"
    }
  ],
  "name": "Bamboo shoots, cooked, boiled, drained, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 1.92,
    "energy_kcal": 50.0,
    "fat_g": 0.22,
    "fibre_g": 1.0,
    "folate_ug": 2.0,
    "iron_mg": 0.24,
    "magnesium_mg": 3.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 20.0,
    "potassium_mg": 533.0,
    "protein_g": 1.53,
    "salt_g": 0.01,
    "sat_fat_g": 0.051,
    "sodium_mg": 4.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169211",
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
