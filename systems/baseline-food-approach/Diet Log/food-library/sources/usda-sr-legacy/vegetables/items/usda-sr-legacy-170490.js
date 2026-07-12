/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-cubes",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170490",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 205.0,
      "key": "cup-cubes",
      "kind": "unit",
      "label": "cup, cubes"
    }
  ],
  "name": "Squash, winter, all varieties, cooked, baked, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 8.85,
    "energy_kcal": 37.0,
    "fat_g": 0.35,
    "fibre_g": 2.8,
    "folate_ug": 20.0,
    "iron_mg": 0.44,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 19.0,
    "potassium_mg": 241.0,
    "protein_g": 0.89,
    "salt_g": 0.0025,
    "sat_fat_g": 0.072,
    "sodium_mg": 1.0,
    "sugar_g": 3.3,
    "vitamin_a_ug": 261.0,
    "vitamin_c_mg": 9.6,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 4.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170490",
  "state": "Baked",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "baked",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
