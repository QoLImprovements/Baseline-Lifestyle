/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-mashed",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168455",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "cup-mashed",
      "kind": "unit",
      "label": "cup, mashed"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "cup-cubes",
      "kind": "unit",
      "label": "cup, cubes"
    }
  ],
  "name": "Rutabagas, cooked, boiled, drained, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 6.84,
    "energy_kcal": 30.0,
    "fat_g": 0.18,
    "fibre_g": 1.8,
    "folate_ug": 15.0,
    "iron_mg": 0.18,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 41.0,
    "potassium_mg": 216.0,
    "protein_g": 0.93,
    "salt_g": 0.0125,
    "sat_fat_g": 0.029,
    "sodium_mg": 5.0,
    "sugar_g": 3.95,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 18.8,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168455",
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
