/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "racc",
  "description": "Finfish and Shellfish Products",
  "id": "usda-foundation-2684446",
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
  "name": "Crustaceans, crab, blue swimming, lump, pasteurized, refrigerated",
  "nutritionPerBasis": {
    "calcium_mg": 111.0,
    "carbs_g": 0.0,
    "energy_kcal": 81.0,
    "fat_g": 0.808,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.632,
    "magnesium_mg": 43.1,
    "omega3_g": 0.0,
    "phosphorus_mg": 278.0,
    "potassium_mg": 235.0,
    "protein_g": 18.6,
    "salt_g": 0.8275,
    "sat_fat_g": 0.0,
    "sodium_mg": 331.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2684446",
  "state": "Unspecified",
  "subcategory": "Finfish and Shellfish Products",
  "tags": [
    "finfish-and-shellfish-products",
    "fish-and-seafood",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
