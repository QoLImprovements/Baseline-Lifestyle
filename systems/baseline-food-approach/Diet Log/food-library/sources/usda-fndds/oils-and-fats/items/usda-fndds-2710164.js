/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "1-cup",
  "description": "Margarine",
  "id": "usda-fndds-2710164",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 224.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    }
  ],
  "name": "Oil or table fat, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 0.18,
    "energy_kcal": 789.0,
    "fat_g": 87.7,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.1,
    "magnesium_mg": 1.0,
    "omega3_g": 0.019,
    "phosphorus_mg": 9.0,
    "potassium_mg": 12.0,
    "protein_g": 0.29,
    "salt_g": 0.74,
    "sat_fat_g": 22.9,
    "sodium_mg": 296.0,
    "sugar_g": 0.17,
    "vitamin_a_ug": 391.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 13.1,
    "vitamin_k_ug": 72.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710164",
  "state": "Unspecified",
  "subcategory": "Margarine",
  "tags": [
    "margarine",
    "oils-and-fats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
