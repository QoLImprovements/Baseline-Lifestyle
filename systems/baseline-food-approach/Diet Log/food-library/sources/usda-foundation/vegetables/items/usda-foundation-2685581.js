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
  "id": "usda-foundation-2685581",
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
  "name": "Tomatoes, crushed, canned",
  "nutritionPerBasis": {
    "calcium_mg": 19.2,
    "carbs_g": 7.14,
    "energy_kcal": 37.9,
    "fat_g": 0.398,
    "fibre_g": 1.94,
    "folate_ug": 0.0,
    "iron_mg": 2.27,
    "magnesium_mg": 18.6,
    "omega3_g": 0.0,
    "phosphorus_mg": 32.9,
    "potassium_mg": 346.0,
    "protein_g": 1.44,
    "salt_g": 0.35,
    "sat_fat_g": 0.0,
    "sodium_mg": 140.0,
    "sugar_g": 3.74,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 9.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2685581",
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
