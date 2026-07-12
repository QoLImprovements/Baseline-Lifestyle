/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "racc",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-foundation-2346400",
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
  "name": "Beans, snap, green, raw",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 7.41,
    "energy_kcal": 40.0,
    "fat_g": 0.275,
    "fibre_g": 3.01,
    "folate_ug": 0.0,
    "iron_mg": 0.652,
    "magnesium_mg": 28.2,
    "omega3_g": 0.0,
    "phosphorus_mg": 41.2,
    "potassium_mg": 290.0,
    "protein_g": 1.97,
    "salt_g": 0.0,
    "sat_fat_g": 0.0,
    "sodium_mg": 0.0,
    "sugar_g": 2.33,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 43.9
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2346400",
  "state": "Raw",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "legumes-and-pulses",
    "raw",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
