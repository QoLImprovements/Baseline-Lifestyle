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
  "id": "usda-foundation-2644291",
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
  "name": "Peas, green, sweet, canned, sodium added, sugar added, drained and rinsed",
  "nutritionPerBasis": {
    "calcium_mg": 28.2,
    "carbs_g": 12.7,
    "energy_kcal": 80.1,
    "fat_g": 1.15,
    "fibre_g": 5.95,
    "folate_ug": 0.0,
    "iron_mg": 1.14,
    "magnesium_mg": 21.9,
    "omega3_g": 0.0,
    "phosphorus_mg": 77.7,
    "potassium_mg": 109.0,
    "protein_g": 4.73,
    "salt_g": 0.5175,
    "sat_fat_g": 0.0,
    "sodium_mg": 207.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2644291",
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
