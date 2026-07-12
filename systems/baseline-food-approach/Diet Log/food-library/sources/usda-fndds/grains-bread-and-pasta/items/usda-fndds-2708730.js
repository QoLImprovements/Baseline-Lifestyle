/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-small-individual",
  "description": "Turnovers and other grain-based items",
  "id": "usda-fndds-2708730",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-small-individual",
      "kind": "unit",
      "label": "1 small/individual"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "1-regular-large",
      "kind": "unit",
      "label": "1 regular/large"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Samosa",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 33.2,
    "energy_kcal": 310.0,
    "fat_g": 17.5,
    "fibre_g": 1.8,
    "folate_ug": 44.0,
    "iron_mg": 2.16,
    "magnesium_mg": 16.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 73.0,
    "potassium_mg": 166.0,
    "protein_g": 5.14,
    "salt_g": 0.97,
    "sat_fat_g": 4.41,
    "sodium_mg": 388.0,
    "sugar_g": 1.28,
    "vitamin_a_ug": 54.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 2.38,
    "vitamin_k_ug": 14.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708730",
  "state": "Unspecified",
  "subcategory": "Turnovers and other grain-based items",
  "tags": [
    "grains-bread-and-pasta",
    "turnovers-and-other-grain-based-items",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
