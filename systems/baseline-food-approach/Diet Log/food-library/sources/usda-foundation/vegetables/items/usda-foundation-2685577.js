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
  "id": "usda-foundation-2685577",
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
  "name": "Eggplant, raw",
  "nutritionPerBasis": {
    "calcium_mg": 11.1,
    "carbs_g": 5.4,
    "energy_kcal": 26.1,
    "fat_g": 0.12,
    "fibre_g": 2.45,
    "folate_ug": 20.0,
    "iron_mg": 0.0,
    "magnesium_mg": 13.5,
    "omega3_g": 0.0,
    "phosphorus_mg": 22.8,
    "potassium_mg": 222.0,
    "protein_g": 0.852,
    "salt_g": 0.001105,
    "sat_fat_g": 0.0,
    "sodium_mg": 0.442,
    "sugar_g": 2.35,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2685577",
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
