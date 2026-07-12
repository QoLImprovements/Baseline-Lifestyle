/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "piece",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-foundation-324317",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.2,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Onion rings, breaded, par fried, frozen, prepared, heated in oven",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 36.3,
    "energy_kcal": 288.0,
    "fat_g": 14.4,
    "fibre_g": 2.4,
    "folate_ug": 31.0,
    "iron_mg": 1.14,
    "magnesium_mg": 20.4,
    "omega3_g": 0.859,
    "phosphorus_mg": 75.0,
    "potassium_mg": 135.0,
    "protein_g": 4.52,
    "salt_g": 0.935,
    "sat_fat_g": 2.15,
    "sodium_mg": 374.0,
    "sugar_g": 4.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.6,
    "vitamin_e_mg": 0.57,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "324317",
  "state": "Fried",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "fried",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
