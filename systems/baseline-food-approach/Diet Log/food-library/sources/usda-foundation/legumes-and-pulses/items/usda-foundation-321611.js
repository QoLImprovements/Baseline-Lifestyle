/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "drained",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-foundation-321611",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 129.0,
      "key": "drained",
      "kind": "unit",
      "label": "drained"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Beans, snap, green, canned, regular pack, drained solids",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 4.11,
    "energy_kcal": 21.0,
    "fat_g": 0.39,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.78,
    "magnesium_mg": 12.7,
    "omega3_g": 0.0,
    "phosphorus_mg": 23.0,
    "potassium_mg": 97.0,
    "protein_g": 1.04,
    "salt_g": 0.705,
    "sat_fat_g": 0.0,
    "sodium_mg": 282.0,
    "sugar_g": 1.29,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "321611",
  "state": "Canned",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "canned",
    "legumes-and-pulses",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
