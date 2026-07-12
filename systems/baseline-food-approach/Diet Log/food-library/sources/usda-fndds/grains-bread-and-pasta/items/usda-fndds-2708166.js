/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-medium-paper-8-5-8-dia",
  "description": "Crackers, excludes saltines",
  "id": "usda-fndds-2708166",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-medium-paper-8-5-8-dia",
      "kind": "unit",
      "label": "1 medium paper (8-5/8\" dia)"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-large-paper-12-3-8-dia",
      "kind": "unit",
      "label": "1 large paper (12-3/8\" dia)"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-small-paper-6-3-8-dia",
      "kind": "unit",
      "label": "1 small paper (6-3/8\" dia)"
    }
  ],
  "name": "Rice paper",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 72.3,
    "energy_kcal": 323.0,
    "fat_g": 1.11,
    "fibre_g": 0.5,
    "folate_ug": 14.0,
    "iron_mg": 0.27,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 80.0,
    "potassium_mg": 64.0,
    "protein_g": 5.91,
    "salt_g": 0.785,
    "sat_fat_g": 0.328,
    "sodium_mg": 314.0,
    "sugar_g": 0.27,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708166",
  "state": "Unspecified",
  "subcategory": "Crackers, excludes saltines",
  "tags": [
    "crackers-excludes-saltines",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
