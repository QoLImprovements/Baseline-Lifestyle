/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cooked",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-foundation-326196",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 118.0,
      "key": "cooked",
      "kind": "unit",
      "label": "cooked"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Kale, frozen, cooked, boiled, drained, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 150.0,
    "carbs_g": 5.3,
    "energy_kcal": 36.0,
    "fat_g": 1.21,
    "fibre_g": 0.0,
    "folate_ug": 65.0,
    "iron_mg": 0.84,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 42.0,
    "potassium_mg": 144.0,
    "protein_g": 2.94,
    "salt_g": 0.04,
    "sat_fat_g": 0.0,
    "sodium_mg": 16.0,
    "sugar_g": 1.12,
    "vitamin_a_ug": 146.0,
    "vitamin_c_mg": 17.8,
    "vitamin_e_mg": 1.61,
    "vitamin_k_ug": 418.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "326196",
  "state": "Boiled",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "boiled",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
