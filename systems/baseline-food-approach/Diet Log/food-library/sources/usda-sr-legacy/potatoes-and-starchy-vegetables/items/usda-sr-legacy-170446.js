/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170446",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 210.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Potatoes, mashed, dehydrated, prepared from flakes without milk, whole milk and butter added",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 10.9,
    "energy_kcal": 405.0,
    "fat_g": 5.13,
    "fibre_g": 0.8,
    "folate_ug": 7.0,
    "iron_mg": 0.16,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 39.0,
    "potassium_mg": 164.0,
    "protein_g": 1.77,
    "salt_g": 0.41,
    "sat_fat_g": 3.19,
    "sodium_mg": 164.0,
    "sugar_g": 1.61,
    "vitamin_a_ug": 47.0,
    "vitamin_c_mg": 9.7,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170446",
  "state": "Mashed",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "mashed",
    "potatoes-and-starchy-vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
