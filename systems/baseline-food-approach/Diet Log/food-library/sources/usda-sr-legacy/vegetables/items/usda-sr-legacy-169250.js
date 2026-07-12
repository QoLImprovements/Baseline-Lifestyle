/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "10-slices-2-1-2-dia",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169250",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 81.0,
      "key": "10-slices-2-1-2-dia",
      "kind": "unit",
      "label": "10 slices (2-1/2\" dia)"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "root-9-1-2-long",
      "kind": "unit",
      "label": "root (9-1/2\" long)"
    }
  ],
  "name": "Lotus root, raw",
  "nutritionPerBasis": {
    "calcium_mg": 45.0,
    "carbs_g": 17.2,
    "energy_kcal": 74.0,
    "fat_g": 0.1,
    "fibre_g": 4.9,
    "folate_ug": 13.0,
    "iron_mg": 1.16,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 100.0,
    "potassium_mg": 556.0,
    "protein_g": 2.6,
    "salt_g": 0.1,
    "sat_fat_g": 0.03,
    "sodium_mg": 40.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 44.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169250",
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
