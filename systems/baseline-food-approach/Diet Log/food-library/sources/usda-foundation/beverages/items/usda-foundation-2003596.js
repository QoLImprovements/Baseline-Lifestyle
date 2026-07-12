/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "g",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-foundation-2003596",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Tomato juice, with added ingredients, from concentrate, shelf stable",
  "nutritionPerBasis": {
    "calcium_mg": 9.74,
    "carbs_g": 4.32,
    "energy_kcal": 23.3,
    "fat_g": 0.288,
    "fibre_g": 0.0,
    "folate_ug": 18.9,
    "iron_mg": 0.299,
    "magnesium_mg": 10.4,
    "omega3_g": 0.0,
    "phosphorus_mg": 18.5,
    "potassium_mg": 198.0,
    "protein_g": 0.859,
    "salt_g": 0.59,
    "sat_fat_g": 0.0,
    "sodium_mg": 236.0,
    "sugar_g": 2.57,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 49.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2003596",
  "state": "Unspecified",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "beverages",
    "unspecified",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
