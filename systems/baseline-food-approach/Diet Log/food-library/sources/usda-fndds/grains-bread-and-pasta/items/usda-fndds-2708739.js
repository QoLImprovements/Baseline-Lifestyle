/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-regular-large",
  "description": "Turnovers and other grain-based items",
  "id": "usda-fndds-2708739",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "1-regular-large",
      "kind": "unit",
      "label": "1 regular/large"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "1-small-individual",
      "kind": "unit",
      "label": "1 small/individual"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Turnover or hot pocket, pizza pocket",
  "nutritionPerBasis": {
    "calcium_mg": 231.0,
    "carbs_g": 29.7,
    "energy_kcal": 244.0,
    "fat_g": 9.62,
    "fibre_g": 1.7,
    "folate_ug": 61.0,
    "iron_mg": 1.91,
    "magnesium_mg": 22.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 170.0,
    "potassium_mg": 149.0,
    "protein_g": 9.66,
    "salt_g": 1.165,
    "sat_fat_g": 3.94,
    "sodium_mg": 466.0,
    "sugar_g": 4.16,
    "vitamin_a_ug": 47.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.74,
    "vitamin_k_ug": 4.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708739",
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
