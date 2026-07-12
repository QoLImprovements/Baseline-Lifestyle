/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "racc",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-foundation-1999628",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Mushrooms, shiitake",
  "nutritionPerBasis": {
    "calcium_mg": 0.766,
    "carbs_g": 8.17,
    "energy_kcal": 44.1,
    "fat_g": 0.195,
    "fibre_g": 4.17,
    "folate_ug": 32.1,
    "iron_mg": 0.144,
    "magnesium_mg": 14.1,
    "omega3_g": 0.0,
    "phosphorus_mg": 75.8,
    "potassium_mg": 243.0,
    "protein_g": 2.41,
    "salt_g": 0.00234,
    "sat_fat_g": 0.0,
    "sodium_mg": 0.936,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "1999628",
  "state": "Unspecified",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "unspecified",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
