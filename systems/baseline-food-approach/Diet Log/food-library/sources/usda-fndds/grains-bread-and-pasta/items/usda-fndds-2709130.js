/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "quantity-not-specified",
  "description": "Turnovers and other grain-based items",
  "id": "usda-fndds-2709130",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-item-any-size",
      "kind": "unit",
      "label": "1 item, any size"
    }
  ],
  "name": "Vada",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 33.2,
    "energy_kcal": 266.0,
    "fat_g": 9.73,
    "fibre_g": 5.8,
    "folate_ug": 247.0,
    "iron_mg": 3.57,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 147.0,
    "potassium_mg": 373.0,
    "protein_g": 12.8,
    "salt_g": 0.7875,
    "sat_fat_g": 1.31,
    "sodium_mg": 315.0,
    "sugar_g": 1.31,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 9.5,
    "vitamin_e_mg": 2.2,
    "vitamin_k_ug": 13.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709130",
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
