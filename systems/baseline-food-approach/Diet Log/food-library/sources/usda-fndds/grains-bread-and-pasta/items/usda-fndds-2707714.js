/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-puri-approx-4-4-5-dia",
  "description": "Yeast breads",
  "id": "usda-fndds-2707714",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 36.0,
      "key": "1-puri-approx-4-4-5-dia",
      "kind": "unit",
      "label": "1 puri (approx 4-4/5\" dia)"
    },
    {
      "gramsPerUnit": 36.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Bread, puri",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 39.2,
    "energy_kcal": 409.0,
    "fat_g": 24.9,
    "fibre_g": 3.5,
    "folate_ug": 35.0,
    "iron_mg": 2.55,
    "magnesium_mg": 43.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 120.0,
    "potassium_mg": 134.0,
    "protein_g": 6.84,
    "salt_g": 0.425,
    "sat_fat_g": 3.34,
    "sodium_mg": 170.0,
    "sugar_g": 0.18,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 4.73,
    "vitamin_k_ug": 24.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707714",
  "state": "Unspecified",
  "subcategory": "Yeast breads",
  "tags": [
    "grains-bread-and-pasta",
    "unspecified",
    "yeast-breads"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
