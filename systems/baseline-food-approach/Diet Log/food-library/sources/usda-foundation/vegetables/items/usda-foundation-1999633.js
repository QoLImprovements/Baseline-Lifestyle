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
  "id": "usda-foundation-1999633",
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
  "name": "Spinach, mature",
  "nutritionPerBasis": {
    "calcium_mg": 66.6,
    "carbs_g": 2.64,
    "energy_kcal": 27.6,
    "fat_g": 0.604,
    "fibre_g": 1.59,
    "folate_ug": 113.0,
    "iron_mg": 1.05,
    "magnesium_mg": 93.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 40.6,
    "potassium_mg": 460.0,
    "protein_g": 2.91,
    "salt_g": 0.2675,
    "sat_fat_g": 0.0,
    "sodium_mg": 107.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 306.0,
    "vitamin_c_mg": 30.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "1999633",
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
