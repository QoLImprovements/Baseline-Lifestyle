/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-cubic-inch",
  "description": "Turnovers and other grain-based items",
  "id": "usda-fndds-2708729",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 12.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-regular-large",
      "kind": "unit",
      "label": "1 regular/large"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-small-individual",
      "kind": "unit",
      "label": "1 small/individual"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Spanakopita",
  "nutritionPerBasis": {
    "calcium_mg": 132.0,
    "carbs_g": 10.4,
    "energy_kcal": 212.0,
    "fat_g": 15.2,
    "fibre_g": 1.0,
    "folate_ug": 58.0,
    "iron_mg": 1.25,
    "magnesium_mg": 48.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 126.0,
    "potassium_mg": 264.0,
    "protein_g": 8.27,
    "salt_g": 0.98,
    "sat_fat_g": 6.55,
    "sodium_mg": 392.0,
    "sugar_g": 0.64,
    "vitamin_a_ug": 233.0,
    "vitamin_c_mg": 9.4,
    "vitamin_e_mg": 1.75,
    "vitamin_k_ug": 211.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708729",
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
