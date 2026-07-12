/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-1-cubes",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168448",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 116.0,
      "key": "cup-1-cubes",
      "kind": "unit",
      "label": "cup (1\" cubes)"
    }
  ],
  "name": "Pumpkin, raw",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 6.5,
    "energy_kcal": 109.0,
    "fat_g": 0.1,
    "fibre_g": 0.5,
    "folate_ug": 16.0,
    "iron_mg": 0.8,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 44.0,
    "potassium_mg": 340.0,
    "protein_g": 1.0,
    "salt_g": 0.0025,
    "sat_fat_g": 0.052,
    "sodium_mg": 1.0,
    "sugar_g": 2.76,
    "vitamin_a_ug": 426.0,
    "vitamin_c_mg": 9.0,
    "vitamin_e_mg": 1.06,
    "vitamin_k_ug": 1.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168448",
  "state": "Raw",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "raw",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
