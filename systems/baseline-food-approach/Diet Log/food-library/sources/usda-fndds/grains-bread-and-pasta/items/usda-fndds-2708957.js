/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-cup",
  "description": "Rice mixed dishes",
  "id": "usda-fndds-2708957",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 187.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Dukboki or Tteokbokki, Korean",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 19.6,
    "energy_kcal": 131.0,
    "fat_g": 4.05,
    "fibre_g": 0.8,
    "folate_ug": 14.0,
    "iron_mg": 0.39,
    "magnesium_mg": 14.0,
    "omega3_g": 0.033,
    "phosphorus_mg": 70.0,
    "potassium_mg": 104.0,
    "protein_g": 4.11,
    "salt_g": 0.495,
    "sat_fat_g": 0.939,
    "sodium_mg": 198.0,
    "sugar_g": 1.52,
    "vitamin_a_ug": 25.0,
    "vitamin_c_mg": 4.7,
    "vitamin_e_mg": 1.7,
    "vitamin_k_ug": 6.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708957",
  "state": "Unspecified",
  "subcategory": "Rice mixed dishes",
  "tags": [
    "grains-bread-and-pasta",
    "rice-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
