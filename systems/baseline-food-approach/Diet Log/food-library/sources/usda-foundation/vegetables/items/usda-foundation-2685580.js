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
  "id": "usda-foundation-2685580",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Tomato, paste, canned, without salt added",
  "nutritionPerBasis": {
    "calcium_mg": 36.8,
    "carbs_g": 20.2,
    "energy_kcal": 104.0,
    "fat_g": 0.732,
    "fibre_g": 4.7,
    "folate_ug": 0.0,
    "iron_mg": 3.18,
    "magnesium_mg": 49.6,
    "omega3_g": 0.0,
    "phosphorus_mg": 91.2,
    "potassium_mg": 972.0,
    "protein_g": 4.23,
    "salt_g": 0.153,
    "sat_fat_g": 0.0,
    "sodium_mg": 61.2,
    "sugar_g": 11.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 18.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2685580",
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
