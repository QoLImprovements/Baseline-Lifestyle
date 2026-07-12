/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-foundation-2747660",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Peppers, banana or Hungarian wax, seeded, raw",
  "nutritionPerBasis": {
    "calcium_mg": 9.82,
    "carbs_g": 4.97,
    "energy_kcal": 23.9,
    "fat_g": 0.131,
    "fibre_g": 1.79,
    "folate_ug": 31.8,
    "iron_mg": 0.162,
    "magnesium_mg": 10.2,
    "omega3_g": 0.0,
    "phosphorus_mg": 21.8,
    "potassium_mg": 177.0,
    "protein_g": 0.723,
    "salt_g": 0.0,
    "sat_fat_g": 0.0,
    "sodium_mg": 0.0,
    "sugar_g": 2.71,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 112.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2747660",
  "state": "Raw",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "fruit",
    "raw",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
