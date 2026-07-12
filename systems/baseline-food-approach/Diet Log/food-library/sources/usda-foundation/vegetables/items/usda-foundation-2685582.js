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
  "id": "usda-foundation-2685582",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Tomato, puree, canned",
  "nutritionPerBasis": {
    "calcium_mg": 17.6,
    "carbs_g": 8.04,
    "energy_kcal": 40.8,
    "fat_g": 0.265,
    "fibre_g": 1.97,
    "folate_ug": 0.0,
    "iron_mg": 1.24,
    "magnesium_mg": 19.3,
    "omega3_g": 0.0,
    "phosphorus_mg": 34.1,
    "potassium_mg": 416.0,
    "protein_g": 1.58,
    "salt_g": 0.0735,
    "sat_fat_g": 0.0,
    "sodium_mg": 29.4,
    "sugar_g": 4.31,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 10.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2685582",
  "state": "Canned",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "canned",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
