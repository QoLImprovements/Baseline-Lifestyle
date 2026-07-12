/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "quantity-not-specified",
  "description": "Rice mixed dishes",
  "id": "usda-fndds-2709114",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 192.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 256.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Rice, white, with vegetables and gravy, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 18.9,
    "energy_kcal": 95.0,
    "fat_g": 0.88,
    "fibre_g": 1.1,
    "folate_ug": 35.0,
    "iron_mg": 0.82,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 38.0,
    "potassium_mg": 64.0,
    "protein_g": 2.19,
    "salt_g": 0.6025,
    "sat_fat_g": 0.217,
    "sodium_mg": 241.0,
    "sugar_g": 0.74,
    "vitamin_a_ug": 44.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 4.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709114",
  "state": "Unspecified",
  "subcategory": "Rice mixed dishes",
  "tags": [
    "condiments-and-sauces",
    "rice-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
