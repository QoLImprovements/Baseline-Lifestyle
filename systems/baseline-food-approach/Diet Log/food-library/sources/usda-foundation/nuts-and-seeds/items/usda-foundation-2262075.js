/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "racc",
  "description": "Nut and Seed Products",
  "id": "usda-foundation-2262075",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Flaxseed, ground",
  "nutritionPerBasis": {
    "calcium_mg": 230.0,
    "carbs_g": 34.4,
    "energy_kcal": 545.0,
    "fat_g": 37.3,
    "fibre_g": 23.1,
    "folate_ug": 41.4,
    "iron_mg": 5.78,
    "magnesium_mg": 372.0,
    "omega3_g": 19.4,
    "phosphorus_mg": 556.0,
    "potassium_mg": 793.0,
    "protein_g": 18.0,
    "salt_g": 0.09175,
    "sat_fat_g": 3.28,
    "sodium_mg": 36.7,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 3.68
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2262075",
  "state": "Unspecified",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "nut-and-seed-products",
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
