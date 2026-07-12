/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "total-can-contents",
  "description": "Finfish and Shellfish Products",
  "id": "usda-foundation-334194",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 142.0,
      "key": "total-can-contents",
      "kind": "unit",
      "label": "total can contents"
    },
    {
      "gramsPerUnit": 107.0,
      "key": "drained-solids",
      "kind": "unit",
      "label": "drained solids"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Fish, tuna, light, canned in water, drained solids",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 0.08,
    "energy_kcal": 90.0,
    "fat_g": 0.94,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.67,
    "magnesium_mg": 22.7,
    "omega3_g": 0.228,
    "phosphorus_mg": 137.0,
    "potassium_mg": 176.0,
    "protein_g": 19.0,
    "salt_g": 0.5475,
    "sat_fat_g": 0.224,
    "sodium_mg": 219.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "334194",
  "state": "Canned",
  "subcategory": "Finfish and Shellfish Products",
  "tags": [
    "canned",
    "finfish-and-shellfish-products",
    "fish-and-seafood"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
